import Styled from "styled-components";

const LinkContainer = Styled.div`
  color: white;
  text-align: center;
  @media (max-width: 992px){
    text-align: left;
  }
  @media (max-width: 900px){
    display:none;
  }
    a {
      color:white;
      text-decoration:none;
      font-size: 1.5rem;
      padding : 1rem 1.5rem;
      @media (max-width: 1200px){
        font-size: 1rem;
        padding: 1rem;
      }
    }
`;

const LaptopMenu = () => {
  return (
    <LinkContainer>
      <a href="#home">Home</a>
      <a href="#aboutus">About us</a>
      <a href="#services">Services</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </LinkContainer>
  );
};

export default LaptopMenu;
