import Link from "next/link";
import Styled from "styled-components";
import Logo from "./logo";
import ShareButton from "../share-popup/share-button";

const NavContainer = Styled.div`
  font-family: 'Playfair Display', serif;
  overflow: hidden;
  width: 100%;
  background-color: black;
  display:grid;
  grid-template-columns: 110px 800px 700px 1vh;
  align-items:center;
`;

const LogoContainer = Styled.div`
  text-align:center;
`;

const Title = Styled.div`
  color: gold;
  font-size: 2rem;
`;

const LinkContainer = Styled.div`
  color: white;
  text-align: center;
    a {
      color:white;
      text-decoration:none;
      font-size: 1rem;
      padding : 1rem;
    }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Title>The Staging Club</Title>
      <LinkContainer>
        <Link href="/">Home</Link>
        <Link href="/aboutus">About us</Link>
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact">Contact</Link>
      </LinkContainer>
      <ShareButton></ShareButton>
    </NavContainer>
  );
};

export default Navbar;
