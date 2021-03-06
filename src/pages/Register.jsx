// Style
import styled from "styled-components";
// Responsive Layout
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1570915226741-cc7d678ad7ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ margin: "10px 5px 0px 0px" })};
`;

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
  ${mobile({ fontSize: "16px", textAlign: "center" })};
`;

const Button = styled.button`
  width: 20%;
  padding: 10px 15px;
  margin: 10px 10px;
  border: none;
  background-color: #00a5a5;
  color: white;
  font-weight: 700;
  cursor: pointer;
  ${mobile({ width: "100%" })};
`;

const Register = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>CRIE UMA CONTA</Title>
          <Form>
            <Input placeholder="nome" />
            <Input placeholder="sobrenome" />
            <Input placeholder="usuário" />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <Input placeholder="confirme a senha" />
            <Agreement>
              Ao criar uma conta, eu concordo com os termos de nossa{" "}
              <b>POLÍTICA DE PRIVACIDADE</b>.
            </Agreement>
            <Button>CRIAR</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
