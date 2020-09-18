import Styled from "styled-components";
// import Column1 from "./column1";

const Container = Styled.div`
display : grid;
grid-template-columns : 20% 80%;
width: 100%;
padding-top:70px;
`;

const Column1 = Styled.div`
color: black;
font-size: 1rem;
text-align: center;
`;

const Column2 = Styled.div`
color: black;
font-size: 1rem;
text-align: center;
`;

const Main = () => {
  return (
    <Container>
      <Column1>Column1</Column1>
      <Column2>Column2</Column2>
    </Container>
  );
};

export default Main;
