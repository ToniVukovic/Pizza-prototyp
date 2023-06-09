import React from "react";
import styled from "@emotion/styled";
import ToppingsCard from "../Components/ToppingsCard";
import bacon from "../assets/images/bacon.png";
import chilli from "../assets/images/chilli.png";
import corn from "../assets/images/corn.png";
import egg from "../assets/images/egg.png";
import meat from "../assets/images/meat.png";
import pineapple from "../assets/images/pineapple.png";
import shroom from "../assets/images/shroom.png";

const Configuration = () => {
  const Wrapper = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    ${"" /* justify-content: center; */}
    align-items: center;
    width: 100%;
  `;

  const Title = styled.div`
    font-family: "Avenir";
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
  `;

  const ToppingsWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    gap: 15px;
  `;

  const ToppingPrice = styled.p`
    font-family: "Avenir";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #383838;
    margin-top: 24px;
  `;

  return (
    <Wrapper>
      <Title>Toppings! Toppings!</Title>
      <ToppingsWrapper>
        <ToppingsCard name="Chilli" image={chilli} />
        <ToppingsCard name="Corn" image={corn} />
        <ToppingsCard name="Egg" image={egg} />
        <ToppingsCard name="Pineapple" image={pineapple} />
        <ToppingsCard name="Meat" image={meat} />
        <ToppingsCard name="Shroom" image={shroom} />
        <ToppingsCard name="Bacon" image={bacon} />
      </ToppingsWrapper>
      <ToppingPrice>Total price +$3.00</ToppingPrice>
      <Title>Pizza! Pizza! Size</Title>
      <Title>Get the discount</Title>
    </Wrapper>
  );
};

export default Configuration;
