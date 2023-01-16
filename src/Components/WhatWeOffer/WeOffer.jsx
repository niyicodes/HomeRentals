import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import OfferCard from "../Offer/Offer";
import offer from "./Offer";

const WeOffer = () => {
 const transition = { type: "spring", duration: 1.5 };
 return (
  <Offerings>
   <h2>
    <span>minimum living cost</span> takes care of everything
   </h2>
   <div className="offers">
    <figure>
     <img src="/img/Hero.jpg" alt="" />
    </figure>
    <motion.div className="details" initial={{ opacity: 0, y: -100 }}
      transition={{ ...transition, duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}>
     {offer.map(({ image, title }) => {
      return <OfferCard key={title} image={image} title={title} />;
     })}
    </motion.div>
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
  gap: 2rem;
  figure {
   width: 40%;
   img {
    width: 90%;
    height: 100%;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
   }
  }
  .details {
   width: 60%;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-row-gap: 5rem;
   margin: 3rem 0;
  }
 }
 /* for mobile landscape view */
 @media (min-width: 280px) and (max-width: 1023px) {
  margin: 2rem;

  h2 {
   font-size: 1.3rem;
   /* text-align: center; */
   line-height: 1.5;
  }

  .offers {
   margin-top: 2rem;
   flex-direction: column;
   align-items: center;

   figure {
    width: 100%;
    img {
     width: 100%;
     height: 100%;
    }
   }

   .details {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    place-items: center;
    column-gap: 2rem;
    grid-row-gap: 2rem;
    margin: 0;
   }
  }
 }

 /* for landscape view and laptops */
 @media (min-width: 769px) and (max-width: 1023px) {
  margin: 2rem;

  h2 {
   font-size: 1.5rem;
  }

  .offers {
   margin-top: 2rem;
  }
 }
 /* for landscape view and laptops */
 @media (min-width: 1024px) and (max-width: 1280px) {
  margin: 3rem;

  .offers {
   gap: 1rem;
   .details {
    column-gap: 2rem;
    grid-row-gap: 3rem;
   }
  }
 }
`;
export default WeOffer;
