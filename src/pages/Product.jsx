import React from "react";
// Style
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
// Responsive Layout
import { mobile } from "../responsive";
// Components
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

// Filter Div

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: "100%", margin: "10px 5px" })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 4px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid #00a5a5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #00a5a5;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #00a5a5;
    color: #fff;
    transition: 0.5s ease;
  }
`;

const Product = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImgContainer>
            <Image src="https://matalan-content.imgix.net/uploads/asset_file/asset_file/337852/1624543657.723664-S2839395_CX24_Alt1.jpg?ixlib=rails-2.1.4&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=736&h=1030&fit=crop&dpr=2&s=84eee3ea6843272ee01dcc00f8550fac" />
          </ImgContainer>
          <InfoContainer>
            <Title>Macacão Azul</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quidem. Dolorum ullam eos dicta ad incidunt omnis impedit itaque
              illo veniam dolorem.
            </Desc>
            <Price>$ 20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Cor: </FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Tamanho: </FilterTitle>
                <FilterSize>
                  <FilterSizeOption>PP</FilterSizeOption>
                  <FilterSizeOption>P</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>G</FilterSizeOption>
                  <FilterSizeOption>GG</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove style={{ cursor: "pointer" }} />
                <Amount>1</Amount>
                <Add style={{ cursor: "pointer" }} />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default Product;
