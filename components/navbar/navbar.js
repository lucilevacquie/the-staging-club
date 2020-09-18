import Link from "next/link";
import Styled from "styled-components";
import Logo from "./logo";

const NavContainer = Styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  background-color: black;
  display:grid;
  grid-template-columns: 10% 50% 30% 10%;
  align-items:center;
`;

const LogoContainer = Styled.div`
`;

const Title = Styled.div`
font-family: "Times New Roman", Times, serif;
color: gold;
font-size: 1.5rem;
`;

const LinkContainer = Styled.div`
color: white;
font-family: "Times New Roman", Times, serif;
text-align: center;
  a {
    color:white;
    text-decoration:none;
    font-size: 1rem;
    padding : 1rem;
  }
`;

const ShareButton = Styled.div`
color:white;
width: 70px;
padding: 1rem;
text-align: center;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Title>The Staging Club</Title>
      <LinkContainer>
        <Link href="/">About us</Link>
        <Link href="/services">Services</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact">Contact</Link>
      </LinkContainer>
      <ShareButton>
        Share
        {/* <img src="images/assets/share.png" alt="Share"></img> */}
      </ShareButton>
    </NavContainer>
  );
};

export default Navbar;
