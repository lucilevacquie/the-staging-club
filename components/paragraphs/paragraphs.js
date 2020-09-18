import Styled from "styled-components";

const Container = Styled.div`
font-family: 'Playfair Display', serif;
font-size: 1.5rem;
text-align:center;
`;

const Paragraph = (props) => {
  return <Container>{props.children}</Container>;
};

export default Paragraph;
