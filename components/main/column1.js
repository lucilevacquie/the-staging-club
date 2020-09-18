import Styled from "styled-components";

const Container = Styled.div`
position: fixed;
overflow: hidden;
background-color: black;
text-align:center;
`;

const Text = Styled.div`
color: white;
font-family: "Times New Roman", Times, serif;
font-size:1rem;
`;

const ContactLogo = Styled.div`

`;

const Column1 = () => {
  return (
    <Container>
      <Text>Column1</Text>
      <ContactLogo></ContactLogo>
    </Container>
  );
};

export default Column1;
