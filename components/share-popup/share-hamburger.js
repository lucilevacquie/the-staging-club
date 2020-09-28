import Styled from "styled-components";

const Container = Styled.div`  
    color:white;
    width: 100%;
    text-align: center;
    background-color: ${props => props.theme.colors.darkerBlack};
    font-family: 'Playfair Display', serif;
    padding-top: 1rem;
`;

const Share = Styled.div``;

const LinksContainer = Styled.div``;

const Links = Styled.div``;

const Img = Styled.img`
padding:1rem;
width:40px;
`;

const DataLinks = [
  {
    link: "https://www.facebook.com/sharer.php?u=[post-url]",
    img: "images/assets/facebook.png",
    label: "Facebook",
  },
  {
    link:
      "https://www.linkedin.com/shareArticle?url=[post-url]&title=The%20Staging%20Club",
    img: "images/assets/linkedin2.png",
    label: "LinkedIn",
  },
  {
    link:
      "https://twitter.com/share?url=[post-url]&text=The%20Staging%20Club&via=[via]&hashtags=[hashtags]",
    img: "images/assets/twitter.png",
    label: "Twitter",
  },
  {
    link: "https://api.whatsapp.com/send?text=The%20Staging%20Club [post-url]",
    img: "images/assets/whatsapp.png",
    label: "Whatsapp",
  },
];

const ShareHamburger = () => {
  return (
    <Container>
      <Share>Share it with the world!</Share>
      <LinksContainer>
        <Links>
          {DataLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank">
              <Img src={item.img} alt={item.label} />
            </a>
          ))}
        </Links>
      </LinksContainer>
    </Container>
  );
};

export default ShareHamburger;
