import Styled from "styled-components";

const LogoImg = Styled.img`
width: 65%;
@media (max-width: 576px){
  width:60%;
}
`;

const Logo = () => {
  return <LogoImg src="images/assets/logowebsite.png" alt="Logo" />;
};

export default Logo;
