import React from "react";
// Components
import CategoryItem from "./CategoryItem";
// Style
import styled from "styled-components";
// Responsive Layout
import { mobile } from "../responsive";
// Data
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
`;

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
