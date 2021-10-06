// Style
import styled from "styled-components";
// Responsive Layout
import {mobile} from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  ${mobile({ height: "30px" })};
`;

const Announcement = () => {
  return (
    <>
      <Container>Super promoção! Frete Grátis em Compras Acima de R$100,00 !</Container>
    </>
  );
};

export default Announcement;
