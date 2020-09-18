import Styled from "styled-components";
import Titles from "../titles/titles";
import Paragraph from "../paragraphs/paragraphs";

const Container = Styled.div`
height:100vh;
font-family: 'Playfair Display', serif;
padding : 1rem 4rem;
`;

const Services = () => {
  return (
    <Container>
      <Titles>What do we offer?</Titles>
      <Paragraph>
        The Staging Club offers various services to suit any budget! Whether you
        just need a bit of advice about redecorating a space, adding fine
        furnishings to your home, Sourcing value for money furnishings and
        accessories, or preparing/staging your property for sale, I believe I
        can help! Prices dependant on the service we provide.
      </Paragraph>
    </Container>
  );
};

export default Services;
