import React, { useState } from "react";
import styled from "styled-components";
import Form from "../Form/Form";

const NewProperty = () => {
 return (
  <AddNewProperty>
   <h3>
    Your property with us and be Confident that Your Room will be Filled Out!
   </h3>
   <div className="addaproperty">
    <h2>add a new property</h2>
    <Form />
   </div>
  </AddNewProperty>
 );
};

const AddNewProperty = styled.section`
font-family: "Inter", sans-serif;
 h3 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2rem 0;
  text-transform: capitalize;
 }
 .addaproperty {
  margin:4rem 5rem;
  -webkit-box-shadow: 0px 3px 15px 3px rgba(0,0,0,0.47); 
  box-shadow: 0px 3px 15px 3px rgba(0,0,0,0.47);
  padding: 2rem 3rem;
  h2{
   font-family: 'Poppins', sans-serif;
   font-size: 1.5rem;
   color: #F4511E;
   text-transform: capitalize;
   text-align: center;
   padding-bottom: 1rem;
  }
 }

 /* for mobile landscape view */
 @media (min-width: 280px) and (max-width: 1024px){
  .addaproperty{
   margin: 1rem;
   padding: 1rem;
   width: 95%;
  }
 }
`;
export default NewProperty;
