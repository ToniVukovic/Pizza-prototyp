import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Configuration from "./pages/Configuration";
import Order from "./pages/Order";
import Successful from "./pages/Successful";
import Head from "./Components/Head";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Configuration />} />
        <Route path="Order" element={<Order />} />
        <Route path="Successful" element={<Successful />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
