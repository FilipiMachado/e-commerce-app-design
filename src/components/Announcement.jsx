// Style
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return (
    <>
      <Container>Super promoção! Frete Grátis em Compras Acima de R$100,00 !</Container>
    </>
  );
};

export default Announcement;
