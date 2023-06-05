import React from "react";
import { Header, HeaderWrapper, Button, Title } from "./HeadStyle.js";
import pizza from "../assets/images/small-pizza.png";

const Head = () => {
  return (
    <HeaderWrapper>
      <Header>
        <Title>Pizz-a-tron</Title>
        <img height={40} width={40} src={pizza} alt="pizza" />
        <Button>Log out</Button>
      </Header>
    </HeaderWrapper>
  );
};

export default Head;
