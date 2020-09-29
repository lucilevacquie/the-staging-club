import Styled from "styled-components";
import Titles from "../components/titles/titles";
import ContactLink from "../components/main/contact-links";

const Container = Styled.div`
margin-top: 2rem;
font-family: 'Playfair Display', serif;
padding : 1rem 4rem;
@media (max-width: 576px){
    padding: 0 2rem;
    }
`;

const Text = Styled.p`
  font-family: 'Raleway', sans-serif;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Titles>Contact us</Titles>
      <Text>
        For a no obligation chat about your plans just get in touch by using any
        of the methods below!
      </Text>
      <ContactLink />
    </Container>
  );
};

export default Contact;
