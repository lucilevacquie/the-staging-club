import Styled from "styled-components";

const ArrowButton = Styled.div`
position: absolute;
transform: rotate(180deg);
left: 5%;
`;
const Image = Styled.img`
width: 70px;
`;

const ArrowPrev = () => {
  return (
    <ArrowButton>
      <Image src="images/assets/arrow-button.png" alt="Previous" />
    </ArrowButton>
  );
};

export default ArrowPrev;
