import React from "react";
// Style
import styled from "styled-components";
// Material UI Icons
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Left Div

const Left = styled.div`
  flex: 1;
  display: flex;
  background-color: #f78;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

// Center Div

const Center = styled.div`
  flex: 1;
  text-align: center;
  background-color: #f43;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

// Right Div

const Right = styled.div`
  flex: 1;
  background-color: #f47;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>E-COMMERCE APP</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={100} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
