// Components
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Style
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

// Top Div

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

// Bottom Div

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div``;
const ProductDetail = styled.div``;
const Image = styled.img``;
const Details = styled.div``;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;
const PriceDetail = styled.div``

const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>SEU CARRINHO</Title>
          <Top>
            <TopButton>CONTINUE NAVEGANDO</TopButton>
            <TopTexts>
              <TopText>Carrinho de Compras (2)</TopText>
              <TopText>Sua Lista de Desejos (0)</TopText>
            </TopTexts>
            <TopButton type="filled">FAÇA CHECKOUT</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718292
                    </ProductId>
                    <ProductColor />
                    <ProductSize>
                      <b>Size:</b> 34
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>price</PriceDetail>
              </Product>
            </Info>
            <Summary>summary</Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Cart;
