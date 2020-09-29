import Styled from "styled-components";

const Container = Styled.div`
  font-family: 'Raleway', sans-serif;
  font-size: 1.2rem;
  justify-content: justify;
  flex:2;
  width: 90%;
  @media (max-width: 992px){
    font-size: 1rem;
    flex: 1.8;
  }
  @media (max-width: 768px){
    font-size: 1rem;
  }
  @media (max-width: 576px){
    font-size: 1rem;
    width: 100%;
  }
`;

const Blabla = Styled.p`
  text-align: justify;
  line-height: 1.5rem;
`;

const Text = (props) => {
  return (
    <Container>
      <Blabla>{props.children}</Blabla>
    </Container>
  );
};

export default Text;
