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
