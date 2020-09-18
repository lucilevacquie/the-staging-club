import Link from "next/link";
import Styled from "styled-components";
import Logo from "./logo";

const NavContainer = Styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  background-color: black;
  color: white;
  font-family: "Times New Roman", Times, serif;
  padding: 1rem;
  text-align: right;

  a {
    color:white;
    text-decoration:none;
    font-size: 1rem;
    padding : 2rem;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo />
      <Link href="/">About us</Link>
      <Link href="/services">Services</Link>
      <Link href="/reviews">Reviews</Link>
      <Link href="/contact">Contact</Link>
    </NavContainer>
  );
};

export default Navbar;