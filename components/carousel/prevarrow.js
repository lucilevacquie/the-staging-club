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

const ArrowPrev = ({ onClickFunc }) => {
  return (
    <ArrowButton>
      <Image
        src="images/assets/arrow-button.png"
        alt="Previous"
        onClick={onClickFunc}
      ></Image>
    </ArrowButton>
  );
};

export default ArrowPrev;
