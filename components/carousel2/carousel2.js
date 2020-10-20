import Styled from "styled-components";
import { useState } from "react";
import ArrowContainer from "../carousel/arrows";

const DataCarousel = [
  {
    src: "images/assets/bedroom.png",
    label: "Kids bedroom before and after",
  },
  {
    src: "images/assets/toilet.png",
    label: "Downstairs bathroom before and after",
  },
  {
    src: "images/assets/kitchen.png",
    label: "Kitchen before and after",
  },
  {
    src: "images/assets/bathroom.png",
    label: "Bathroom before and after",
  },
];

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    @media (min-width: 1200px){
      height: 500px;
    }
    @media (max-width: 992px){
      height:470px;
    }
    @media (max-width: 768px){
      height:400px;
    }
    @media (max-width: 576px){
      height:350px;
    }
    @media (max-width: 450px){
      height:250px;
    }
`;

const SlideContainer = Styled.div`
    position:relative;
    overflow: hidden;
    display: flex;
    width: 755px;
    height:510px;
    margin: auto;
    @media (max-width: 992px){
      width: 700px;
    }
    @media (max-width: 768px){
      width: 500px;
    }
    @media (max-width: 576px){
      width: 300px;
    }
`;

const Slide = Styled.div`
    margin:0;
    display: flex;
    align-items: center;
    margin-left: ${(props) => -props.currentIndex * 100}%;
    transition: 1s;
`;

const ImgSlide = Styled.div`
    width: 755px;
    display: block;
    @media (max-width: 992px){
      width: 700px;
    }
    @media (max-width: 768px){
      width: 500px;
    }
    @media (max-width: 576px){
      width: 300px;
    }

`;

const Img = Styled.img`
    width: 100%;
    max-height: 482px;
`;

const Label = Styled.div`
  font-family: 'Raleway', sans-serif;
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
    <Container>
      <SlideContainer>
        <Slide currentIndex={count}>
          <ArrowContainer next={next} prev={prev} />
          {DataCarousel.map((item, index) => (
            <ImgSlide key={index} active={index === count}>
              <Img src={item.src} alt="" />
              <Label>{item.label}</Label>
            </ImgSlide>
          ))}
        </Slide>
      </SlideContainer>
    </Container>
  );
};

export default Carousel;
