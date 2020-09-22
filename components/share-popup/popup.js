import Styled from "styled-components";

const Popup = Styled.div`
position: fixed,
display: none;
left:50%;
top:50%;
z-index:2000;
padding: 20px;
width: 560px;
background-color: black;
font-size: 1.5rem;
font-family: 'Playfair Display', serif;
color: white;
`;

const SharePopup = () => {
  return (
    <Popup>
      <p>Share it with the world!</p>
      <input type="button" value="Facebook" onClick="hidePopup()"></input>
    </Popup>
  );
};

export default SharePopup;
