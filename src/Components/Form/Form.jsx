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
    <label htmlFor="unit">country</label>
    <select name="" id="">
     <option value=""></option>
    </select>
    </div>
    <div className="input">
    <label htmlFor="unit">state</label>
    <select name="" id="">
     <option value=""></option>
    </select>
    </div>
    <div className="input">
      <label htmlFor="unit">room type</label>
      <select name="" id="">
       <option value=""></option>
      </select>
     </div>
    </div>
    <div className="details"></div>
  </Forms>
 )
}

const Forms = styled.form`
 
`
export default Form