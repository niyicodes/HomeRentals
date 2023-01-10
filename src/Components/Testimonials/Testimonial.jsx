import React from "react";
import styled from "styled-components";

const Testimonial = () => {
 return (
  <Testimonials>
   <div className="testimonial-text"></div>
   <div className="testimonial-video"></div>
  </Testimonials>
 );
};
const Testimonials = styled.section`
 display: flex;
 flex-direction: row;
 gap: 2rem;
 width: 100%;
 background-color: rgba(244, 81, 30, 0.07);

 .testimonial-text{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 }
`;
export default Testimonial;
