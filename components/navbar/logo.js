import Styled from "styled-components";

const LogoImg = Styled.img`
width: 50%;
@media (max-width: 576px){
  width:60%;
}
`;

const Logo = () => {
  return <LogoImg src="images/assets/the-staging-club4.png" alt="Logo" />;
};

export default Logo;
