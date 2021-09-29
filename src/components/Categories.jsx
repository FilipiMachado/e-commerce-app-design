import React from "react";
// Components
import CategoryItem from "./CategoryItem";
// Style
import styled from "styled-components";
// Data
import { categories } from "../data";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id}/>
        ))}
      </Container>
    </>
  );
};

export default Categories;
