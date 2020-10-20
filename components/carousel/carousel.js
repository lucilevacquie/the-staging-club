import Styled from "styled-components";
import { useRef } from "react";
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
`;

const Slide = Styled.div`
  height: 100%;
  display: grid;
  grid-template-columns : repeat(6, 100%);
  position: relative;
  transform: translate(-100%, 0);
`;

const ImgSlide = Styled.div`
  width: 100%;
  height: 100%;
`;

const Img = Styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
`;

const ArrowContainer = Styled.div`
  position: absolute;
  width:100%;
  display: flex;
  align-items: center;
`;

const Carousel = () => {
  const slideRef = useRef();
  const isMoving = useRef();
  
  const onClickMove = (index) => {
    if (isMoving.current) {
      return
    } 
    isMoving.current = true;
    
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
      const imageElements = slideRef.current.children;
      console.log(imageElements)
      if (index === 1){
        const clonedImage = imageElements[0].cloneNode(true)
        slideRef.current.appendChild(clonedImage)
        imageElements[0].remove()
      } else {
        const clonedImage = imageElements[imageElements.length - 1].cloneNode(true)
        slideRef.current.prepend(clonedImage)
        imageElements[imageElements.length - 1].remove()
      }
      slideRef.current.style.transition = "0s";
      slideRef.current.style.transform = "translate(-100%, 0)";

      isMoving.current = false;

    }, transitionTime * 1000);
  }

  return (
    <Container id="home">
      <SlideContainer>
        <Slide ref={slideRef}>
          {DataCarousel.map((item) => {
            return (
              <ImgSlide key={item.img}>
                <Img src={item.img} alt="" />
                <Quote>{item.quote}</Quote>
              </ImgSlide>
            )
          })}
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
