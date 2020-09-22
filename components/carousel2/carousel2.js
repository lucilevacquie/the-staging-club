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
];

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 700px;
`;

const SlideContainer = Styled.div`
    position:relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: auto;
`;

const Slide = Styled.div`
    margin:0;
    width: 100%;
`;

const ImgSlide = Styled.div`
    width: 100%;
`;

const Img = Styled.img`
    width: 100%;
    max-height:700px;
`;

const Label = Styled.div`
padding-bottom: 1.5rem;
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
        <ArrowContainer next={next} prev={prev} />
        <Slide>
          {DataCarousel.map(
            (item, index) =>
              index === count && (
                <ImgSlide key={index}>
                  <Img src={item.src} alt="" />
                  <Label>{item.label}</Label>
                </ImgSlide>
              )
          )}
        </Slide>
      </SlideContainer>
    </Container>
  );
};

export default Carousel;
