import Styled from "styled-components";
import Column1 from "./column1";
import Carousel from "../carousel/carousel";
import AboutUs from "../aboutus/aboutus";
import Services from "../services/services";
import Contact from "../contact/contact";

const Container = Styled.div`
font-family: 'Playfair Display', serif;
display : grid;
grid-template-columns : 110px 1fr;
height:100%;
width: 100%;
background-color: blue;
overflow:hidden;
`;

const Column2 = Styled.div`
color: black;
font-size: 1rem;
text-align: center;
width:100%;
overflow-y:scroll;
`;

const Main = () => {
  return (
    <Container>
      <Column1 />
      <Column2>
        <Carousel />
        <AboutUs />
        <Services />
        <Contact />
      </Column2>
    </Container>
  );
};

export default Main;
