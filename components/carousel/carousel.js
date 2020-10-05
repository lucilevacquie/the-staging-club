import Styled from "styled-components";
import { useState } from "react";
import ArrowContainer from "./arrows";
import MoreInfo from "./more-info";
import Quote from "./quote";
// import Dots from "./dots";

const DataCarousel = [
  {
    img: "images/assets/carousel1.jpeg",
    label: "Office",
    quote: "| Wonderful!",
  },
  {
    img: "images/assets/carousel3.jpeg",
    label: "Kitchen",
    quote: "| Incredible!",
  },
  {
    img: "images/assets/carousel2.jpeg",
    label: "Bedroom",
    quote: "| shit!",
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
  list-style-type: none;
  text-align: center;
  display: flex;
  margin-left: ${(props) => -props.currentIndex * 110.5}%;
  transition: 1s;
  @media (max-width: 992px){
    margin-left: ${(props) => -props.currentIndex * 113}%;
  }
  @media (max-width: 768px){
    margin-left: ${(props) => -props.currentIndex * 100}%;
  }
`;

const ImgSlide = Styled.div`
  width:100vw;
  display: block;
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
        <Slide currentIndex={count}>
          {DataCarousel.map((item, index) => (
            <ImgSlide key={index} active={index === count}>
              <Img src={item.img} alt=""></Img>
              <Quote>{item.quote}</Quote>
            </ImgSlide>
          ))}
        </Slide>
        <MoreInfo />
        {/* <Dots
          currentIndex={count}
          dataCarousel={DataCarousel}
          onClickFunc={setCount}
        /> */}
      </SlideContainer>
    </Container>
  );
};

export default Carousel;
