import Link from "next/link";
import Styled from "styled-components";
import Logo from "./logo";
import ShareButton from "../share-popup/share-button";
import MobileMenu from "./mobile-menu";
import LaptopMenu from "./links-pages";

const NavContainer = Styled.div`
  font-family: 'Playfair Display', serif;
  overflow: hidden;
  width: 100%;
  background-color: black;
  display:grid;
  align-items:center;
  grid-template-columns: 110px 700px 700px 1vh;
  z-index:999;
  @media (max-width: 1200px){
    grid-template-columns: 110px 250px 500px 1vh;
  }
  @media (max-width: 992px){
    grid-template-columns: 110px 250px 500px 1vh;
  }
  @media (max-width: 768px){
    grid-template-columns: 110px 400px 1vh;
  }
  @media (max-width: 576px){
    grid-template-columns: 90px 230px 1vh;
  }
`;

const LogoContainer = Styled.div`
  text-align:center;
`;

const Title = Styled.div`
  color: gold;
  font-size: 2rem;
  @media (max-width: 768px){
    font-size: 1.8rem;
  }
  @media (max-width: 576px){
    font-size: 1.2rem;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Title>The Staging Club</Title>
      <LaptopMenu />
      <MobileMenu />
      <ShareButton></ShareButton>
    </NavContainer>
  );
};

export default Navbar;
