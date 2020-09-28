import Styled from "styled-components";

const Container = Styled.div`
  position: absolute;
  bottom: 5%;
  width:100%;
`;

const Dot = Styled.button`
  height: 25px;
  width: 25px;
  background-color: ${(props) => (props.active ? "black" : "grey")};
  border-radius: 50%;
  display: inline-block;
  margin: 0 10px;
  opacity: 0.7;
  :hover{
    cursor: pointer;
  }
  @media (max-width: 1200px){
    height: 25px;
    width: 25px;
  }
  @media (max-width: 992px){
    height: 20px;
    width: 20px;
  }
  @media (max-width: 768px){
    height: 15px;
    width: 15px;
  }
  @media (max-width: 576px){
    height: 5px;
    width: 5px;
  }
`;

const Dots = ({ currentIndex, dataCarousel, onClickFunc }) => {
  return (
    <Container>
      {dataCarousel.map((item, index) => (
        <Dot
          key={index}
          active={currentIndex === index}
          onClick={() => onClickFunc(index)}
        />
      ))}
    </Container>
  );
};

export default Dots;
