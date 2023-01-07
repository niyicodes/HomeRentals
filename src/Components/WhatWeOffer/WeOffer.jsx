import React from "react";
import styled from "styled-components";
import OfferCard from "../Offer/Offer";
import offer from "./Offer";


const WeOffer = () => {
 return (
  <Offerings>
   <h2>
    <span>minimum living cost</span> takes care of everything
   </h2>
   <div className="offers">
    <figure>
     <img src="/img/Hero.jpg" alt="" />
    </figure>
    <div className="details">
     {
      offer.map(({image, title}) => {
       return(
        <OfferCard key={title} image={image} title={title}/>
       )
      })
     }
    </div>
   </div>
  </Offerings>
 );
};

const Offerings = styled.section`
 background-color: white;
 margin: 3rem 5rem;

 h2 {
  color: black;
  font-size: 2rem;
  font-family: "Inter", sans-serif;
  text-transform: capitalize;

  span {
   border-bottom: 3px solid #f4511e;
   padding-bottom: 3px;
  }
 }
 .offers {
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  figure {
   width: 30%;
   img {
    width: 380px;
    height: 450px;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
   }
  }
  .details {
   width: 70%;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-row-gap: 5rem;
   margin: 3rem 0;
  }
 }
`;
export default WeOffer;
