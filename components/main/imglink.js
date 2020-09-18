import Styled from "styled-components";

const ImageContainer = Styled.div`

`;

const ImgLink = Styled.img`
width: 25%;
padding: 0.5rem 2rem;
`;

const DataImg = [
  {
    img: "images/assets/email.png",
    link: "thestagingclubuk@gmail.com",
    label: "Email",
  },
  {
    img: "images/assets/email.png",
    link: "https://www.linkedin.com/in/jenny-watt-hall-87588a123/",
    label: "LinkedIn",
  },
  {
    img: "images/assets/facebook.png",
    link: "",
    label: "Facebook",
  },
  {
    img: "images/assets/Instagram.png",
    link: "https://www.instagram.com/the_staging_club/",
    label: "Instagram",
  },
];

const ContactLink = () => {
  return (
    <>
      <ImageContainer>
        {DataImg.map((item) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <ImgLink src={item.img} alt={item.label} />
          </a>
        ))}
      </ImageContainer>
    </>
  );
};

export default ContactLink;
