import Styled from "styled-components";
import Titles from "../components/titles/titles";
import Paragraph from "../components/paragraphs/paragraph";
import Text from "../components/paragraphs/text";
import Image from "../components/paragraphs/images";

const Container = Styled.div`
margin-top: 2rem;
font-family: 'Playfair Display', serif;
padding : 1rem 4rem;
`;

const Services = () => {
  return (
    <Container>
      <Titles>What do we offer?</Titles>
      <Paragraph flip>
        <Text>
          The Staging Club offers various services to suit any budget! Whether
          you just need a bit of advice about redecorating a space, adding fine
          furnishings to your home, Sourcing value for money furnishings and
          accessories, or preparing/staging your property for sale, I believe I
          can help! Prices dependant on the service we provide.
        </Text>
        <Image src="images/assets/services.jpeg" />
      </Paragraph>
    </Container>
  );
};

export default Services;
