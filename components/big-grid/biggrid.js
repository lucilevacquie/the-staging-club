import Styled from "styled-components";
import Navbar from "../navbar/navbar";
import Main from "../main/main";

export const NavHeight = "70px";

const Container = Styled.div`
    display: grid;
    grid-template-rows: ${NavHeight} 1fr;
    height: 100%;
    width: 100%;
`;

const BigGrid = () => {
  return (
    <Container>
      <Navbar />
      <Main />
    </Container>
  );
};

export default BigGrid;
