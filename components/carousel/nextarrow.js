import Styled from "styled-components";

const ArrowButton = Styled.div`
position: absolute;
right:5%;
`;
const Image = Styled.img`
width: 70px;
`;

const ArrowNext = () => {
  return (
    <ArrowButton>
      <Image src="images/assets/arrow-button.png" alt="Next" />
    </ArrowButton>
  );
};

export default ArrowNext;
