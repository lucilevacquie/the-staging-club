import Styled from "styled-components";
import { useState } from "react";

const ButtonContainer = Styled.div`  
    color:white;
    width: 70px;
    text-align: center;
    font-family: 'Playfair Display', serif;
    @media (max-width: 768px){
      display: none;
    }
`;

const Button = Styled.button`
    text-decoration: none;
    color: white;
    background-color: black;
    border: none;
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    cursor: pointer;
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
    <ButtonContainer>
      <Button onClick={() => setShow(true)}>Share</Button>
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
    </ButtonContainer>
  );
};

export default ShareButton;
