// Style
import styled from "styled-components";
// Material UI Icons
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// Images
import Woman from "../assets/woman.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: lightseagreen;
`;

// Slider Div

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color: #fff;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #fff;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border-radius: 15px;
  color: #008080;
  background-color: #fff;
`;

const Slider = () => {
  return (
    <>
      <Container>
        <Arrow direction="left">
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
          <Slide>
            <ImgContainer>
              <Image src={Woman} />
            </ImgContainer>
            <InfoContainer>
              <Title>SUMMER SALE</Title>
              <Desc>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src={Woman} />
            </ImgContainer>
            <InfoContainer>
              <Title>SUMMER SALE</Title>
              <Desc>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src={Woman} />
            </ImgContainer>
            <InfoContainer>
              <Title>SUMMER SALE</Title>
              <Desc>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right">
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
