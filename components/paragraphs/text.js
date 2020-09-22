import Styled from "styled-components";

const Container = Styled.div`
font-family: 'Playfair Display', serif;
font-size: 1.2rem;
justify-content: justify;
flex:2;
width: 90%;
`;

const Blabla = Styled.p``;

const Text = (props) => {
  return (
    <Container>
      <Blabla>{props.children}</Blabla>
    </Container>
  );
};

export default Text;
