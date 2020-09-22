import Styled from "styled-components";

const Container = Styled.div`
display:flex;
flex-direction: ${(props) => (props.flip ? "row-reverse" : "row")};
margin-top: 2rem;
align-items: center;

`;

const Paragraph = (props) => {
  return <Container flip={props.flip}>{props.children}</Container>;
};

export default Paragraph;
