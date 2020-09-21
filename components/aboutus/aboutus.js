import Styled from "styled-components";
import Titles from "../titles/titles";
import Paragraph from "../paragraphs/paragraphs";

const Container = Styled.div`
height:100vh;
font-family: 'Playfair Display', serif;
padding : 1rem 4rem;
`;

const AboutUs = () => {
  return (
    <Container>
      <Titles>Who are we?</Titles>
      <Paragraph>
        Hi my name is Jenny and I am the creator of The Staging Club. I have
        enjoyed a successful career as a nurse and I am a single mum to two
        little terrors! Although I have enjoyed the various roles I’ve worked in
        within the NHS, over the past few years I have developed a keen interest
        in interior design, specifically focusing on home improvements on a
        limited budget! This interest has led me to complete many home
        improvement projects, not only in my own homes but in my family and
        friends homes too. I also became obsessed with scrolling through
        Rightmove and seeing so many pictures of houses that had wasted
        potential and where small changes could have added so much more value to
        the property! I have many friends in the property business and spending
        time working alongside these people has taught me a lot about investing
        in property and strategies to add value in order to get good returns.
        After successfully helping many family and friends to complete various
        home projects they soon encouraged me to try and expand my skills and
        that is when The Staging Club was born!
      </Paragraph>
    </Container>
  );
};

export default AboutUs;