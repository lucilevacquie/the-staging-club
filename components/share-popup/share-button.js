import Styled from "styled-components";
import { useState } from "react";

const Container = Styled.div`
  color:white;
  text-align: center;
  font-family: 'Playfair Display', serif;
  float: right;
  @media (max-width: 900px){
    display: none;
  }
`;

const ButtonContainer = Styled.div`
  width: 100px;
  display: flex;
  align-items:center;
  cursor: pointer;
  img{
    width: 25px;
    rotate: 180deg;
    padding-right: 10px;
    @media (min-width: 992px){
        width: 30px;
    }
  }
`;

const Share = Styled.p`
  font-size: 1rem;
  @media (min-width: 1200px){
        font-size: 1.5rem;
      }
`;

const ModalContainer = Styled.div`
  display: ${(props) => (props.showModal ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left:0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

const Modal = Styled.div`
  background-color: black;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid black;
  width: 30%;
`;

const CloseButton = Styled.span`
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
  :hover{
    color : gold;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Text = Styled.p``;

const Links = Styled.div``;

const Img = Styled.img`
  padding:1rem;
  width:50px;
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

const ShareButton = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <ButtonContainer onClick={() => setShow(true)}>
        <Share>Share</Share>
        <img src="images/assets/sharebutton-icon.png" />
      </ButtonContainer>
      <ModalContainer showModal={show} onClick={() => setShow(false)}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setShow(false)}>&times;</CloseButton>
          <Text>Share it with the world!</Text>
          <Links>
            {DataLinks.map((item, index) => (
              <a key={index} href={item.link} target="_blank">
                <Img src={item.img} alt={item.label} />
              </a>
            ))}
          </Links>
        </Modal>
      </ModalContainer>
    </Container>
  );
};

export default ShareButton;
