import Styled from "styled-components";
import { NavHeight } from "../big-grid/biggrid";
import { useState } from "react";
import Sharebutton from "../share-popup/share-button";
import ShareButton from "../share-popup/share-button";

const DataNavbar = [
  {
    href: "#home",
    title: "Home",
  },
  {
    href: "#aboutus",
    title: "About us",
  },
  {
    href: "#services",
    title: "Services",
  },
  {
    href: "#gallery",
    title: "Gallery",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const Container = Styled.div`
    display: grid;
    grid-template-rows: ${() => NavHeight} 1fr;
    width:100%;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    @media (min-width: 768px){
        display: none;
`;

const FirstRow = Styled.div`
`;

const Button = Styled.button`
    float: right;
    background-color:black;
    box-sizing: border-box;
    border: none;
    :hover{
        border: solid gold;
        border-radius: 10px;
    }
    img{
        width: 40px;
    }
`;

const SecondRow = Styled.div`
    height: ${(props) => (props.showPanel ? "100%" : "0")};
    overflow: hidden;
    text-align: center;
    padding-right: 10px;
    width:100%;
`;

const LinkContainer = Styled.div`
    background-color:black;
    padding:1rem;
    a{
        text-decoration: none;
        color: white;
        :hover{
            color: gold;
        }
    }
`;

const HamburgerMenu = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <FirstRow>
        <Button onClick={() => setShow(!show)}>
          <img src="images/assets/menu-icon.png" />
        </Button>
      </FirstRow>
      <SecondRow showPanel={show}>
        <ShareButton></ShareButton>
        {DataNavbar.map((item) => (
          <LinkContainer>
            <a href={item.href}>{item.title}</a>
          </LinkContainer>
        ))}
      </SecondRow>
    </Container>
  );
};

export default HamburgerMenu;
