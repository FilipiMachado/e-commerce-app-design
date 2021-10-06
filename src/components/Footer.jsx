import React from "react";
// Style
import styled from "styled-components";
// Responsive Layout
import { mobile } from "../responsive";
// Icons
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;

// Left Div

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

// Center Div

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

// Right Div

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#FCF5F5" })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 300px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>FIL.</Logo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At animi
            natus asperiores, fugiat ab harum mollitia cupiditate, praesentium
            culpa eveniet ipsa amet.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contato</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            123 Av. Padre Simão, Sul Baixada 2585
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> 51 3673-8888
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            filipisee@hotmail.com
          </ContactItem>
          <Payment src="https://i.imgur.com/NXt3eV9.png" />
        </Right>
      </Container>
    </>
  );
};

export default Footer;
