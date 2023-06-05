import styled from "styled-components";

const HeaderWrapper = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: center;
  border: 1px solid green;
`;

const Header = styled.div`
  font-family: "Avenir", sans-serif;
  width: 775px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 16px;
`;

const Button = styled.button`
  font-family: "Avenir", sans-serif;
  font-weight: 400;
  background: none;
  border-radius: 35px;
  width: 128px;
  height: 40px;
  border: 1px solid #dbdbdb;
  color: #383838;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #dbdbdb;
  }
`;

export { Header, HeaderWrapper, Button, Title };
