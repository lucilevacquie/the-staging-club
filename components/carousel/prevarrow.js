import Styled from "styled-components";

const ArrowButton = Styled.div`
  position: absolute;
  transform: rotate(180deg);
  left: 5%;
`;
const Image = Styled.img`
  width: 70px;
  cursor: pointer;
  opacity: 0.4;
  :hover{
    opacity: 1;
  }
  @media (max-width: 1200px){
    width: 70px;
  }
  @media (max-width: 992px){
    width: 55px;
  }
  @media (max-width: 768px){
    width: 50px;
  }
  @media (max-width: 576px){
    width: 30px;
  }
`;

const ArrowPrev = ({ onClickMove }) => {
  return (
    <ArrowButton onClick={(e) => onClickMove(-1)}>
      <Image src="images/assets/arrow-button.png" alt="Previous"></Image>
    </ArrowButton>
  );
};

export default ArrowPrev;
