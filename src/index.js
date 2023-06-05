import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Configuration from "./pages/Configuration";
import Order from "./pages/Order";
import Successful from "./pages/Successful";
import Head from "./Components/Head";
import Layout from "./pages/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Configuration />} />
          <Route path="Order" element={<Order />} />
          <Route path="Successful" element={<Successful />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
