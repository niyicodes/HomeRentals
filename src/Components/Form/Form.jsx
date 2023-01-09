import React, { useState } from 'react';
import styled from "styled-components";
import { Country, State, City } from 'country-state-city';

const Form = () => {
 const CountryNigeria = (Country.getCountryByCode("NG"))
 const NigeriaStates = (State.getStatesOfCountry("NG"))

 const [propertyDetails, setPropertyDetails] = useState({
  name:"",
  address:"",
  unitNumber:"",
  country:CountryNigeria,
  state:NigeriaStates,
  roomType:"",
  price:"",
  description:"",
 })
 console.log(propertyDetails.country)
 console.log(propertyDetails.state)
 const handleChange = () => {}
 return (
  <Forms>
    <div className="details">
     <div className="input">
      <label htmlFor="name">name</label>
      <input type="text" name="" id="name" placeholder='Enter name'/>
     </div>
     <div className="input">
      <label htmlFor="address">address</label>
      <input type="text" name="" id="address" placeholder='Enter address'/>
     </div>
     <div className="input">
      <label htmlFor="unit">unit number</label>
      <input type="number" name="" id="unit" placeholder='Enter unit number'/>
     </div>
    </div>
    <div className="details">
    <div className="input">
    <label htmlFor="country">country</label>
    <select name="country" id="country">
     <option value=""></option>
    </select>
    </div>
    <div className="input">
    <label htmlFor="state">state</label>
    <select name="state" id="state">
     <option value=""></option>
    </select>
    </div>
    <div className="input">
      <label htmlFor="room">room type</label>
      <select name="room" id="room">
       <option value=""></option>
      </select>
     </div>
    </div>
    <div className="">
     <div id="description">
     <label htmlFor="description">description</label>
     <textarea name="description" id="description" cols="30" rows="10"></textarea>
     </div>
     <div id="upload">
     <label htmlFor="upload">upload photos</label>

     </div>
    </div>
  </Forms>
 )
}

const Forms = styled.form`
  .details{
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 1rem;
   margin-bottom: 1rem;

   .input{
    display: flex;
    flex-direction: column;
    gap: .3rem;

    input, select{
     padding: .5rem 1rem;
     font-size: 1.2rem;
     background-color: #F9F9F9;
     border: 2px solid #E6E6E6;
     outline: none;
    }
   }
  }
 
`
export default Form