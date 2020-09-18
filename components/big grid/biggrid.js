import Styled from "styled-components";
import Navbar from "../navbar/navbar";
import Main from "../main/main";

const Container = Styled.div`
    display: grid;
    grid-template-rows: 70px 1fr;
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
