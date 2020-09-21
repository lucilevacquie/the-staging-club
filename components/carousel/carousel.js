import Styled from "styled-components";
import ArrowContainer from "./arrows";

const DataCarousel = [
  {
    img: "images/assets/carousel1.jpeg",
    label: "Office",
  },
  {
    img: "images/assets/carousel2.jpeg",
    label: "Bedroom",
  },
  {
    img: "images/assets/carousel3.jpeg",
    label: "Kitchen",
  },
];

const Container = Styled.div`
display : flex;
flex-direction: column;
justify-content: center;
overflow: hidden;
max-height:100%;
height:100vh;
`;

const SlideContainer = Styled.div`
position:relative;
overflow : hidden;
/*arrows align vertical but image is not taking the whole screen anymore*/
display: flex;
align-items:center;
`;

const Slide = Styled.div`
  margin:0;
  max-width: 100%;
  max-height: 100%;
  list-style-type: none;
  text-align: center;
`;

const Img = Styled.img`
    width: 100%;
`;

const Label = Styled.div``;

const Carousel = () => {
  return (
    <Container>
      <SlideContainer>
        <ArrowContainer />
        <Slide>
          {DataCarousel.map((item) => (
            <>
              <Img src={item.img} alt="" />
              <Label>{item.label}</Label>
            </>
          ))}
        </Slide>
      </SlideContainer>
    </Container>
  );
};

export default Carousel;
