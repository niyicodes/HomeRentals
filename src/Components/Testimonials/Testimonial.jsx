import React from "react";
import styled from "styled-components";
import TestiCard from "./TestiCard";

const Testimonial = () => {
 return (
  <Testimonials>
   <div className="testimonial-text">
    <TestiCard />
   </div>
   <div className="testimonial-video">
   <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MM4KHJcazbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   </div>
  </Testimonials>
 );
};
const Testimonials = styled.section`
 display: flex;
 flex-direction: row;
 gap: 2rem;
 width: 100%;
 height: 60vh;
 background-color: rgba(244, 81, 30, 0.07);

 .testimonial-text{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
 }
 .testimonial-video{
  width: 50%;
 }

 @media (min-width: 280px) and (max-width: 568px){
  flex-direction: column;
  height: 100%;

  .testimonial-text{
   width: 100%;
  }
  .testimonial-video{
  width: 100%;
 }
 }

 @media (min-width: 569px) and (max-width: 1024px){
  margin-top: 2rem;
  height: 100%;
  width: 100%;
 }

`;
export default Testimonial;
