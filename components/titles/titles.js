import Styled from "styled-components";

const Container = Styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  text-align:center;
  padding-bottom: 1rem;
  @media (max-width: 768px){
    font-size: 1.4rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
  }
  @media (max-width: 576px){
    font-size: 1.2rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    }
`;

const Titles = (props) => {
  return <Container>{props.children}</Container>;
};

export default Titles;
