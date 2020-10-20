import Styled from "styled-components";

const ArrowButton = Styled.div`
  position: absolute;
  right:5%;
`;
const Image = Styled.img`
  width: 70px;
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

const ArrowNext = ({ onClickMove }) => {
  return (
    <ArrowButton onClick={(e) => onClickMove(1)}>
      <Image src="images/assets/arrow-button.png" alt="Next" />
    </ArrowButton>
  );
};

export default ArrowNext;
