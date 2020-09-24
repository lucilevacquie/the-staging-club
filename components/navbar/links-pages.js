import Styled from "styled-components";

const LinkContainer = Styled.div`
  color: white;
  text-align: center;
  @media (max-width: 768px){
    display:none;
  }
  @media (max-width: 576px){
    display:none;
  }  
    a {
      color:white;
      text-decoration:none;
      font-size: 1rem;
      padding : 1rem;
      @media (max-width: 768px){
        padding: 0.5rem;
      }
    }
`;

const LaptopMenu = () => {
  return (
    <LinkContainer>
      <a href="/">Home</a>
      <a href="/aboutus">About us</a>
      <a href="/services">Services</a>
      <a href="/gallery">Gallery</a>
      {/* <a href="/reviews">Reviews</a> */}
      <a href="/contact">Contact</a>
    </LinkContainer>
  );
};

export default LaptopMenu;
