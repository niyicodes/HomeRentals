import React from "react";
import styled from "styled-components"


const TextOnImage = ({image, title}) => {
 return (
  <AbsoluteText>
   <img src={image} alt="style1" />
   <p>{title}</p>
  </AbsoluteText>
 );
};

const AbsoluteText = styled.div`
 position: relative;
 &:hover{
  transform: scale(0.9);
  z-index: 200;
 }
 p{
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 500;
 }
 img{
  filter: brightness(70%);
 }
`
export default TextOnImage;
