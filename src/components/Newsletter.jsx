import React from "react";
// Style
import styled from "styled-components";
// Responsive Layout
import { mobile } from "../responsive";
// Icons
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })};
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })};
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1.4;
  border: none;
  background-color: #00a5a5;
  color: #fff;
`;

const Newsletter = () => {
  return (
    <>
      <Container>
        <Title>Newsletter</Title>
        <Desc>Receba ofertas semanais de seus produtos favoritos!</Desc>
        <InputContainer>
          <Input placeholder="Seu email" />
          <Button style={{ cursor: "pointer" }}>
            <Send />
          </Button>
        </InputContainer>
      </Container>
    </>
  );
};

export default Newsletter;
