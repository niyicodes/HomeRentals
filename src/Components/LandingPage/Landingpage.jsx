import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Landingpage = () => {
 const transition = { type: "spring", duration: 3 };
 return (
  <LandingPage>
   <Navbar />
   <main>
    <div className="text">
     <motion.h3
      initial={{ opacity: 0, x: "-100" }}
      transition={{ ...transition, duration: 3 }}
      whileInView={{ opacity: 1, x: 0 }}
     >
      The most affortable place to stay in the san franciso bay area
     </motion.h3>
    </div>
    <motion.div
     className="mapdiv"
     initial={{ opacity: 0, x: "100" }}
     transition={{ ...transition, duration: 3 }}
     whileInView={{ opacity: 1, x: 0 }}
    >
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1982.285449589194!2d3.3890841080126894!3d6.449096348833601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1673442480603!5m2!1sen!2sng"
      className="map"
      // width="400"
      // height="350"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
     ></iframe>
    </motion.div>
   </main>
  </LandingPage>
 );
};

const LandingPage = styled.section`
 background: url(./img/bg.jpg) center/cover no-repeat;
 height: 100vh;
 padding: 1rem 5rem;

 main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  .text {
   width: 50%;
   h3 {
    font-family: "Inter", sans-serif;
    font-size: 3.7rem;
    width: 90%;
    color: white;
    text-transform: capitalize;
    line-height: 1.5;
   }
  }
  .mapdiv {
   width: 50%;
   height: 50%;
   justify-content: center;
   .map {
    max-width: 100%;
    width: 90%;
    height: 100%;
   }
  }
 }

 /* for mobile landscape view */
 @media (min-width: 280px) and (max-width: 480px) {
  padding: 1rem !important;

  main {
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-bottom: 1.5rem;
   margin-top: -20px;

   .text {
    width: 100%;
    margin-bottom: 1rem;
    h3 {
     font-size: 2rem;
     text-align: center;
     line-height: 1.1;
     width: 100%;
    }
   }
   .mapdiv {
    width: 100%;
    .map {
     width: 100%;
    }
   }
  }
 }

 /* for tablets and landscape view */
 @media (min-width: 481px) and (max-width: 768px) {
  padding: 1.2rem;
  main {
   flex-direction: column;
   justify-content: center;
   height: 100%;
   .text {
    width: 100%;
    h3 {
     font-size: 30px;
     width: 100%;
     line-height: 1.3;
     text-align: center;
     margin-bottom: 1rem;
    }
   }
   .mapdiv {
    width: 90%;
    .map {
     width: 100%;
    }
   }
  }
 }
 /* for landscape view and laptops */
 @media (min-width: 769px) and (max-width: 1023px) {
  padding: 0 1rem;

  main {
   display: flex;
   flex-direction: row !important;
   justify-content: center;
   align-items: center;

   .text {
    width: 50%;
    margin-bottom: 1rem;

    h3 {
     font-size: 2rem;
     text-align: center;
     line-height: 1.1;
     width: 100%;
    }
   }
   .mapdiv {
    width: 100%;

    .map {
     max-width: 100%;
     width: 100%;
     height: 100%;
    }
   }
  }
 }
`;
export default Landingpage;
