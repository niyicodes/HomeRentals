import React, { useState } from 'react'
import styled from "styled-components"


const NewProperty = () => {
 return (
 <AddNewProperty>
  <h3>Your property with us and be Confident that Your Room will be Filled Out!</h3>
  <div className="addaproperty">
   <h2>add a new property</h2>
   <form action="">
    <div className="details">
     <div className="input">
      <label htmlFor=""></label>
      <input type="text" name="" id="" />
     </div>
     <div className="input">
      <label htmlFor=""></label>
      <input type="text" name="" id="" />
     </div>
     <div className="input">
      <label htmlFor=""></label>
      <input type="text" name="" id="" />
     </div>
    </div>
    <div className="details"></div>
    <div className="details"></div>
   </form>
  </div>
 </AddNewProperty>
 )
}

const AddNewProperty = styled.section`
 
`
export default NewProperty