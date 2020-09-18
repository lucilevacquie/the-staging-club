import Styled from "styled-components";
import ContactLink from "./imglink";

const Container = Styled.div`
font-family: 'Playfair Display', serif;
color: white;
font-size: 1rem;
text-align: center;
background-color: black;
display:grid;
grid-template-rows: 70% 30%;
align-items: center;
max-height: fit-content;
`;

const TextContainer = Styled.div``;

const ContactLogo = Styled.div``;

const Column1 = () => {
  return (
    <Container>
      <TextContainer />
      <ContactLogo>
        <ContactLink />
      </ContactLogo>
    </Container>
  );
};

export default Column1;
