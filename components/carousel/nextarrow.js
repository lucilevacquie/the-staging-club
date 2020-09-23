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
  @media (min-width: 992px){
    width: 55px;
  }
  @media (min-width: 768px){
    width: 50px;
  }
  @media (min-width: 576px){
    width: 30px;
  }
`;

const ArrowNext = ({ onClickFunc }) => {
  return (
    <ArrowButton>
      <Image
        src="images/assets/arrow-button.png"
        alt="Next"
        onClick={onClickFunc}
      />
    </ArrowButton>
  );
};

export default ArrowNext;
