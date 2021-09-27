import React from "react";
// Style
import styled from "styled-components";
// Material UI Icons
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

// Left Div

const Left = styled.div`
  flex: 1;
  background-color: #ccc;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

//const SearchContainer = styled

// Center Div

const Center = styled.div`
  flex: 1;
  background-color: #bbb;
`;

// Right Div

const Right = styled.div`
  flex: 1;
  background-color: #aaa;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
              <Language>EN</Language>
              <SearchIcon/>
          </Left>
          <Center>Center</Center>
          <Right>Right</Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
