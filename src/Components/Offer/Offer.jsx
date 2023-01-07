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
 gap: 1rem;

 img {
  width: 70px;
  
 }
 p {
  font-size: 2rem;
 }
`;
export default OfferCard;
