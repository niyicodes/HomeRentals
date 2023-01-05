import React from "react";
import styled from "styled-components";

const OfferCard = ({ img, text }) => {
 return (
  <Card>
   <img src="/img/money-dollar.png" alt="text" />
   <p>tryingit out</p>
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
