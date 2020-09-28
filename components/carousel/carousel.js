import Styled from "styled-components";
import { useState } from "react";
import ArrowContainer from "./arrows";
import Dots from "./dots";

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
  @media (max-width: 576px){
    height:auto;
  }
`;

const SlideContainer = Styled.div`
position:relative;
overflow : hidden;
display: flex;
align-items:center;
width:100%;
`;

const Slide = Styled.div`
  margin:0;
  max-width: 100%;
  max-height: 100%;
  list-style-type: none;
  text-align: center;
`;

const ImgSlide = Styled.div`
  width:100vw;
  display:${(props) => (props.active ? "block" : "none")};
`;

const Img = Styled.img`
  width: 100%;
  height:100%;
`;

const Carousel = () => {
  const [count, setCount] = useState(0);
  const prev = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = DataCarousel.length - 1;
    }
    setCount(newCount);
  };
  const next = () => {
    let newCount = count + 1;
    if (newCount >= DataCarousel.length) {
      newCount = 0;
    }
    setCount(newCount);
  };

  return (
    <Container id="home">
      <SlideContainer>
        <ArrowContainer next={next} prev={prev} />
        <Slide>
          {DataCarousel.map((item, index) => (
            <ImgSlide key={index} active={index === count}>
              <Img src={item.img} alt="" />
            </ImgSlide>
          ))}
        </Slide>
        <Dots
          currentIndex={count}
          dataCarousel={DataCarousel}
          onClickFunc={setCount}
        />
      </SlideContainer>
    </Container>
  );
};

export default Carousel;
