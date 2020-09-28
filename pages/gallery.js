import Styled from "styled-components";
import Title from "../components/titles/titles";
import Carousel from "../components/carousel2/carousel2";

const Container = Styled.div`
margin-top: 2rem;
font-family: 'Playfair Display', serif;
padding : 1rem 4rem;
text-align: center;
@media (max-width: 576px){
    padding: 0 1rem;
    margin-top: 2rem;
    }
`;

const Gallery = () => {
  return (
    <Container id="gallery">
      <Title>Gallery</Title>
      <Carousel></Carousel>
    </Container>
  );
};

export default Gallery;
