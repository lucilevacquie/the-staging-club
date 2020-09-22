import Styled from "styled-components";
import Titles from "../components/titles/titles";
import Paragraph from "../components/paragraphs/paragraph";
import ContactLink from "../components/main/imglink";

const Container = Styled.div`
margin-top: 2rem;
font-family: 'Playfair Display', serif;
padding : 1rem 4rem;
`;

const Contact = () => {
  return (
    <Container>
      <Titles>Contact us</Titles>
      <p>
        For a no obligation chat about your plans just get in touch by using any
        of the methods below!
      </p>
      <ContactLink />
    </Container>
  );
};

export default Contact;
