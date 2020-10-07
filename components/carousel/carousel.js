import Styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import MoreInfo from "./more-info";
import Quote from "./quote";
import Next from "./nextarrow";
import Prev from "./prevarrow";

const DataCarousel = [
  {
    img: "images/assets/carousel1.jpeg",
    label: "Office",
    quote: "| This makes me excited to work from home!",
  },
  {
    img: "images/assets/carousel3.jpeg",
    label: "Kitchen",
    quote: "| It looks like a show home!",
  },
  {
    img: "images/assets/carousel2.jpeg",
    label: "Bedroom",
    quote:
      "| This room is just classy boutique hotel vibes and I'm here for it!",
  },
];

const transitionTime = 0.4;

const Container = Styled.div`
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-height:100%;
  @media (max-width: 576px){
    height:auto;
  }
  position: relative;
`;

const SlideContainer = Styled.div`
width:100%;
/* height: 100%; */
position: relative;
`;

const Slide = Styled.div`
  height: 100%;
  display: grid;
  grid-template-columns : repeat(6, 100%);
  position: relative;
`;

const ImgSlide = Styled.div`
  width:100vw;
  height: 100%;
`;

const Img = Styled.img`
  width: 100%;
  height:100%;
`;

const ArrowContainer = Styled.div`
  position: absolute;
  width:100%;
  display: flex;
  align-items: center;
`;

const Carousel = () => {
  const [rerender, setRerender] = useState();
  const slideRef = useRef();
  const onClickMove = (index) => {
    console.log(index);
    let position;
    if (index === 1) {
      position = "-200%";
      DataCarousel.push(DataCarousel.shift());
    } else {
      position = "0%";
      DataCarousel.unshift(DataCarousel.pop());
    }
    slideRef.current.style.transition = `${transitionTime}s`;
    slideRef.current.style.transform = `translate(${position}, 0)`;

    setTimeout(() => {
      setRerender(!rerender);
    }, transitionTime * 1000);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "0s";
      slideRef.current.style.transform = "translate(-100%, 0)";
    }
  }, [rerender]);

  return (
    <Container id="home">
      <SlideContainer>
        <Slide ref={slideRef}>
          {DataCarousel.map((item) => (
            <ImgSlide key={item}>
              <Img src={item.img} alt=""></Img>
              <Quote>{item.quote}</Quote>
            </ImgSlide>
          ))}
        </Slide>
      </SlideContainer>
      <ArrowContainer>
        <Prev onClickFunc={onClickMove} />
        <Next onClickFunc={onClickMove} />
      </ArrowContainer>
      <MoreInfo />
    </Container>
  );
};

export default Carousel;
