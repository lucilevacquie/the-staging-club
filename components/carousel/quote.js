import Styled from "styled-components";

const Container = Styled.div`
  background-color: ${(props) => props.theme.colors.black};
  width: 40%;
  bottom: 15%;
  left: 5%;
  position: sticky;
  opacity: 0.7;
  @media (max-width: 768px){
    width: 42%;
  }
  @media (max-width: 569px){
    width: 60%;
    bottom: 10%;
  }
`;

const Text = Styled.div`
  color: white;
  font-family: 'Raleway', sans-serif;
  font-size: 2rem;
  text-align: left;
  padding: 1rem;
  @media (max-width: 1330px){
    font-size: 1.5rem;
  }  
  @media (max-width: 569px){
    font-size: 1.2rem;
  }
`;

const Quote = (props) => {
  return (
    <Container>
      <Text>{props.children}</Text>
    </Container>
  );
};

export default Quote;
