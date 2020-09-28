import Styled from "styled-components";

const Container = Styled.div`
  font-family: 'Raleway', sans-serif;
  line-height: 1.5rem;
  font-size: 1rem;
  justify-content: justify;
  flex:2;
  width: 90%;
  @media (max-width: 992px){
    flex: 1.8;
  }
  @media (max-width: 576px){
    width: 100%;
  }
`;

const Blabla = Styled.p`
  text-align: justify;
`;

const Text = (props) => {
  return (
    <Container>
      <Blabla>{props.children}</Blabla>
    </Container>
  );
};

export default Text;
