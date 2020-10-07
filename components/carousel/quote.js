import Styled from "styled-components";

const Container = Styled.div`
    background-color: ${(props) => props.theme.colors.black};
    width: 38%;
    bottom: 15%;
    left: 5%;
    position: sticky;
    opacity: 0.7;
`;

const Text = Styled.div`
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 2rem;
    text-align: left;
    padding: 1rem;
`;

const Quote = (props) => {
  return (
    <Container>
      <Text>{props.children}</Text>
    </Container>
  );
};

export default Quote;
