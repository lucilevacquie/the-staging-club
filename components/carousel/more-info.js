import Styled from "styled-components";

const MoreContainer = Styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 17%;
  width:100%;
  background-image: linear-gradient(transparent, #212121);
  @media (max-width: 768px){
    display: none;
    }
`;

const More = Styled.a`
    margin:auto;
    opacity: 0.7;
    :hover{
        cursor: pointer;
        opacity: 1;
    }
`;

const Img = Styled.img`
    height: 40px;
    width: 120px;
`;

const Text = Styled.div`
    color: white;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
`;

const MoreInfo = () => {
  const smoothScroll = (event, href) => {
    event.preventDefault();
    document.getElementById(href).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MoreContainer>
      <More onClick={(event) => smoothScroll(event, "aboutus")}>
        <Text>DISCOVER</Text>
        <Img src="images/assets/arrow-down.png"></Img>
      </More>
    </MoreContainer>
  );
};

export default MoreInfo;
