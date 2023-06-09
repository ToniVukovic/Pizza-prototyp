import React from "react";

import pizza from "../assets/images/small-pizza.png";
import styled from "@emotion/styled";

const Head = () => {
  const textColor = "#383838";
  const borderColor = "#DBDBDB";

  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 32px 16px;
    font-family: "Avenir";
    ${"" /* background: #e5e5e5; */}
  `;

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 680px;
  `;
  const Button = styled.button`
    background-color: transparent;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 36px;
    width: 128px;
    padding: 0px;
    height: 40px;
    margin: 0;
    border: 1px solid ${borderColor};
    color: ${textColor};
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      background-color: ${borderColor};
    }
  `;

  const Title = styled.p`
    color: ${textColor};
  `;
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
