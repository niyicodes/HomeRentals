import React from "react";
import styled from "styled-components";

const OfferCard = ({ image, title }) => {
 return (
  <Card>
   <img src={image} alt={title} />
   <p>{title}</p>
  </Card>
 );
};

const Card = styled.div`
 display: flex;
 flex-direction: column;
 align-items: left;
 gap: 2rem;
 font-family: "Inter", sans-serif;
 img {
  width: 70px;
  
 }
 p {
  font-size: 1.7rem;
  text-align: left;
  font-weight: 600;
 }
 /* for mobile landscape view */
 @media (min-width: 280px) and (max-width: 1023px){
  align-items: center;
  img{
   width: 50px;
  }
  p{
   font-size: 1.2rem;
   text-align: center;
  }
 }
 /* for landscape view and laptops */
 @media (min-width: 1024px) and (max-width: 1280px){
  p{
   font-size: 1.3rem;
   text-align: left;
  }
 }
`;
export default OfferCard;
