import Styled from "styled-components";

const Container = Styled.div`
  flex:1.5;
  float: right;
  width: 90%;
  justify-content: center;
`;

const Img = Styled.img`
  width: 60%;
  @media (max-width: 992px){
    width: 65%;
  }
  @media (max-width: 576px){
    width: 60%;
  }
`;

const Image = (props) => {
  return (
    <Container>
      <Img src={props.src} alt={props.label} />
    </Container>
  );
};

export default Image;
