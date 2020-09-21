import Styled from "styled-components";

const ImageContainer = Styled.div`
max-width: 500px;
display: inline-block;
margin-top: 1rem;
`;

const ImgLink = Styled.img`
width: 25%;
padding: 0.5rem 2rem;
`;

const DataImg = [
  {
    img: "images/assets/email1.png",
    link: "thestagingclubuk@gmail.com",
    label: "Email",
  },
  {
    img: "images/assets/linkedin2.png",
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
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImgLink src={item.img} alt={item.label} />
          </a>
        ))}
      </ImageContainer>
    </>
  );
};

export default ContactLink;
