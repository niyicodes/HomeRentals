import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import TextOnImage from "../TextOnImage/TextOnImage";
import {
 image1,
 image2,
 image3,
 image4,
 title1,
 title2,
 title3,
 title4,
} from "./imagelink";

const Lifestyle = () => {
 const transition = { type: "spring", duration: 3 };
 return (
  <LifeStyle>
   <div className="imgdiv">
    <div className="leftimgs">
     <TextOnImage className="abs-1" image={image1} title={title1} />
     <TextOnImage className="abs-2" image={image2} title={title2} />
    </div>
    <div className="rightimgs">
     <TextOnImage className="abs-3" image={image3} title={title3} />
     <TextOnImage className="abs-4" image={image4} title={title4} />
    </div>
   </div>
   <motion.div
    className="textdiv"
    initial={{ opacity: 0, scale: 0.5 }}
    transition={{ ...transition, duration: 2, delay: 0.2 }}
    whileInView={{ opacity: 1, scale: 1 }}
   >
    <h3>Flexibility and options to suit your lifestyle.</h3>
    <p>
     You need it? We got it. We make finding your next home easy, comfortable,
     and simple. From our happiness guarantee to our selective roommate finder
     option. We provide you the flexibility that you most desire.
    </p>
    <div className="btn">
     <Button name="Search Rooms" />
    </div>
   </motion.div>
  </LifeStyle>
 );
};

const LifeStyle = styled.section`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 gap: 4rem;
 margin: 5rem;
 font-family: "Inter", sans-serif;

 .imgdiv {
  display: flex;
  flex-direction: row;
  gap: 1rem;

  img {
   width: 17rem;
   height: 20rem;
   image-rendering: pixelated;
   border-radius: 20px;
  }
  .leftimgs,
  .rightimgs {
   display: grid;
   grid-gap: 1rem;
  }
  .rightimgs {
   margin-top: 5rem;
   img {
    /* height: 17rem; */
   }
  }
 }
 .textdiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
   font-size: 3.7rem;
   width: 90%;
   padding-bottom: 1rem;
  }

  p {
   font-size: 1.5rem;
   width: 90%;
   line-height: 2.2;
   text-align: justify;
  }

  button {
   display: inline-block;
   background-color: #f4511e;
   color: white;
   padding: 0.5rem 2rem;
   margin-top: 1.5rem;
   &:after {
    background-color: #e1a291;
   }
  }
 }

 /* for mobile landscape view */
 @media (min-width: 280px) and (max-width: 1200px) {
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  .imgdiv {
   img {
    width: 10rem;
    height: 15rem;
   }
  }

  .textdiv {
   text-align: center;
   h3 {
    width: 100%;
    font-size: 3rem;
   }
   p {
    width: 100%;
    /* font-size: 1.3rem; */
    text-align: center;
    line-height: 1.3;
   }
  }
 }
`;
export default Lifestyle;
