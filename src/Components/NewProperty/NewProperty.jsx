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
 h3 {
  text-align: center;
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin: 1rem 0;
  text-transform: capitalize;

  .addaproperty {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }
 }
`;
export default NewProperty;
