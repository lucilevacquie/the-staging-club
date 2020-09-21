import Styled from "styled-components";
import Titles from "../titles/titles";
import Paragraph from "../paragraphs/paragraphs";
import ContactLink from "../main/imglink";

const Container = Styled.div`
height:100vh;
font-family: 'Playfair Display', serif;
padding : 1rem 4rem;
`;

const Contact = () => {
  return (
    <Container>
      <Titles>Contact us</Titles>
      <Paragraph>
        For a no obligation chat about your plans just get in touch by using any
        of the methods below!
      </Paragraph>
      <ContactLink />
    </Container>
  );
};

export default Contact;
