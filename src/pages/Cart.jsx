// Components
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Style
import styled from "styled-components";
// Icons
import { Add, Remove } from "@material-ui/icons";

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

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 26px;
  font-weight: 400;
`;

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
                  <Image src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> JESSIE THUNDER SHOES
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718292
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b>Size:</b> 34
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove />
                    <ProductAmount>2</ProductAmount>
                    <Add />
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
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
