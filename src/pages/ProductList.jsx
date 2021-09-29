import React from "react";
// Components
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
// Style
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Announcement />
        <Title>Vestidos</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filtrar Produtos: </FilterText>
            <Select>
              <Option disabled selected>
                Cor
              </Option>
              <Option>Branco</Option>
              <Option>Preto</Option>
              <Option>Vermelho</Option>
              <Option>Azul</Option>
              <Option>Amarelo</Option>
              <Option>Verde</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Tamanho
              </Option>
              <Option>PP</Option>
              <Option>P</Option>
              <Option>M</Option>
              <Option>G</Option>
              <Option>GG</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Ordenar Produtos: </FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option selected>Recente</Option>
              <Option>Preço (asc)</Option>
              <Option>Preço (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default ProductList;
