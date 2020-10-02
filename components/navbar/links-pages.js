import Styled from "styled-components";

const DataNavbar = [
  {
    href: "home",
    title: "Home",
  },
  {
    href: "aboutus",
    title: "About us",
  },
  {
    href: "services",
    title: "Services",
  },
  {
    href: "gallery",
    title: "Gallery",
  },
  {
    href: "contact",
    title: "Contact",
  },
];

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
  const smoothScroll = (event, href) => {
    event.preventDefault();
    document.getElementById(href).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <LinkContainer>
      {DataNavbar.map((item) => (
        <a
          href={"#" + item.href}
          onClick={(event) => smoothScroll(event, item.href)}
        >
          {item.title}
        </a>
      ))}
    </LinkContainer>
  );
};

export default LaptopMenu;
