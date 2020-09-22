import Styled from "styled-components";
import Column1 from "./column1";
import Carousel from "../carousel/carousel";
import AboutUs from "../../pages/aboutus";
import Services from "../../pages/services";
import Contact from "../../pages/contact";
import Gallery from "../../pages/gallery";

const Container = Styled.div`
font-family: 'Playfair Display', serif;
display : grid;
grid-template-columns : 110px 1fr;
height:100%;
width: 100%;
background-color:rgb(234, 233, 233);
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
        <Gallery />
        <Contact />
      </Column2>
    </Container>
  );
};

export default Main;
