import React, { useState } from "react";
import styled from "styled-components";
import { Country, State, City } from "country-state-city";
import Label from "../Label/Label";

const Form = () => {
 const [CountryNigeria, setCountryNigeria] = useState(
  Country.getCountryByCode("NG")
 );
 const [NigeriaStates, setNigeriaStates] = useState(
  State.getStatesOfCountry("NG")
 );

 const [propertyDetails, setPropertyDetails] = useState({
  name: "",
  address: "",
  unitNumber: "",
  country: CountryNigeria,
  state: NigeriaStates,
  roomType: "",
  price: "",
  description: "",
 });
 const handleChange = () => {};
 return (
  <Forms>
   <div className="details">
    <div className="input">
     <Label name={"name"} />
     <input type="text" name="" id="name" placeholder="Enter name" />
    </div>
    <div className="input">
     <Label name={"address"} />
     <input type="text" name="" id="address" placeholder="Enter address" />
    </div>
    <div className="input">
     <Label name={"unit number"} />
     <input type="number" name="" id="unit" placeholder="Enter unit number" />
    </div>
   </div>
   <div className="details">
    <div className="input">
     <Label name={"country"} />
     <select name="country" id="country">
      <option value={propertyDetails.country.name}>
       {propertyDetails.country.name}
      </option>
     </select>
    </div>
    <div className="input">
     <Label name={"state"} />
     <select name="state" id="state">
      {propertyDetails.state.map(({ name, isoCode }) => {
       return (
        <option key={isoCode} value={name}>
         {name}
        </option>
       );
      })}
     </select>
    </div>
    <div className="input">
     <Label name={"room type"} />
     <select name="room" id="room">
      <option value="private">private room</option>
      <option value="apartment">apartment</option>
      <option value="single">single room</option>
     </select>
    </div>
   </div>
   <div className="last-row">
    <div id="description">
     <Label name={"description"} />
     <textarea
      name="description"
      id="description"
      placeholder="Enter description"
      rows="10"
     ></textarea>
    </div>
    <div id="upload">
     <Label name={"upload photos"} />
    </div>
   </div>
  </Forms>
 );
};

const Forms = styled.form`
 label {
  text-transform: capitalize;
  font-size: 1.1rem;
  font-weight: 600;
 }
 input,
 select,
 textarea {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #f9f9f9;
  border: 2px solid #e6e6e6;
  outline: none;
 }
 .details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  .input {
   display: flex;
   flex-direction: column;
   gap: 0.3rem;
  }
 }
 .last-row {
  display: grid;
  grid-template-rows: repeat(2, 3fr);

  #description {
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin-bottom: 1rem;
   textarea {
    width: 100%;
   }
  }
 }
`;
export default Form;
