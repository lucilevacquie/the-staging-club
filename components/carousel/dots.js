import Styled from "styled-components";

const Container = Styled.div`
position: absolute;
bottom: 5%;
width:100%;
`;

const Dot = Styled.div`
height: 25px;
width: 25px;
background-color: ${(props) => (props.active ? "black" : "grey")};
border-radius: 50%;
display: inline-block;
margin: 0 10px;
opacity: 0.7;
`;

const Dots = ({ currentIndex, dataCarousel }) => {
  return (
    <Container>
      {dataCarousel.map((item, index) => (
        <Dot key={index} active={currentIndex === index} />
      ))}
    </Container>
  );
};

export default Dots;
