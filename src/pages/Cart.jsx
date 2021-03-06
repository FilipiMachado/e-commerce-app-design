// Style
import styled from "styled-components";
// Responsive Layout
import { mobile } from "../responsive";
// Components
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Icons
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
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

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

// Bottom Div

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
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
  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
  font-size: 26px;
  font-weight: 400;
  ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

// Summary Div

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
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
            <TopButton type="filled">FINALIZAR COMPRA</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                  <Details>
                    <ProductName>
                      <b>Produto:</b> T??NIS ESPORTIVO
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718292
                    </ProductId>
                    <ProductColor color="red" />
                    <ProductSize>
                      <b>Tamanho:</b> 34
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove style={{ cursor: "pointer" }} />
                    <ProductAmount>2</ProductAmount>
                    <Add style={{ cursor: "pointer" }} />
                  </ProductAmountContainer>
                  <ProductPrice>R$ 79,90</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Image src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                  <Details>
                    <ProductName>
                      <b>Produto:</b> BON?? RVCA
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> 93813718292
                    </ProductId>
                    <ProductColor color="gray" />
                    <ProductSize>
                      <b>Tamanho:</b> P
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove style={{ cursor: "pointer" }} />
                    <ProductAmount>1</ProductAmount>
                    <Add style={{ cursor: "pointer" }} />
                  </ProductAmountContainer>
                  <ProductPrice>R$ 23,90</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>RESUMO DO PEDIDO</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>R$ 103,80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Valor do Frete</SummaryItemText>
                <SummaryItemPrice>R$ 10,00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Desconto</SummaryItemText>
                <SummaryItemPrice>R$ -0,00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>R$ 113,80</SummaryItemPrice>
              </SummaryItem>
              <Button>FINALIZAR COMPRA</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Cart;
