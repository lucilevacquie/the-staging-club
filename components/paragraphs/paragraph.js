import Styled from "styled-components";

const Container = Styled.div`
  display:flex;
  flex-direction: ${(props) => (props.flip ? "row-reverse" : "row")};
  margin-top: 2rem;
  align-items: center;
  @media (max-width: 992px){
    margin-top: 0;
  }
  @media (max-width: 768px){
    flex-direction: column;
    margin-top: 0;
  }
`;

const Paragraph = (props) => {
  return <Container flip={props.flip}>{props.children}</Container>;
};

export default Paragraph;
