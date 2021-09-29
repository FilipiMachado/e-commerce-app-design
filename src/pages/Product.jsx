import React from "react";
// Components
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
// Style
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
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

const FilterContainer = styled.div``;

const Filter = styled.div``;

const FilterTitle = styled.span``;

const FilterColor = styled.div``;

const FilterSize = styled.select``;

const FilterSizeOption = styled.option``;

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
                <FilterTitle>Cor</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Tamanho</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>PP</FilterSizeOption>
                  <FilterSizeOption>P</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>G</FilterSizeOption>
                  <FilterSizeOption>GG</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default Product;
