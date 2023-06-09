import React from "react";
import styled from "@emotion/styled";

const ToppingsCard = (props) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #ffffff;
    border: 1px solid #f2f2f2;
    box-shadow: 0px 12px 16px rgba(0, 0, 0, 0.03);
    border-radius: 56px;
    padding: 11px;
    cursor: pointer;
  `;

  const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    ${"" /* border-radius: 50%; */}
    background: #ffffff;
    box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.03);
    border-radius: 40px;
  `;

  const Name = styled.p`
    font-family: "Avenir";
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #383838;
  `;

  return (
    <Wrapper>
      <ImageWrapper>
        <img style={{ padding: "26px" }} alt="topping" src={props.image} />
      </ImageWrapper>
      <Name>{props.name}</Name>
    </Wrapper>
  );
};

export default ToppingsCard;
