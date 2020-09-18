import Styled from "styled-components";

const Container = Styled.div`
font-family: 'Playfair Display', serif;
font-size: 2rem;
text-align:center;
`;

const Titles = (props) => {
  return <Container>{props.children}</Container>;
};

export default Titles;
