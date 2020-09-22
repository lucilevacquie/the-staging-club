import Styled from "styled-components";

const Container = Styled.div`
flex:1;
float: right;
width: 90%;
justify-content: center;
`;

const Img = Styled.img`
width: 50%;
`;

const Image = (props) => {
  return (
    <Container>
      <Img src={props.src} alt={props.label} />
    </Container>
  );
};

export default Image;
