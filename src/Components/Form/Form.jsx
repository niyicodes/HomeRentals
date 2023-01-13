import React, { useState } from "react";
import styled from "styled-components";
import { Country, State, City } from "country-state-city";
import Label from "../Label/Label";
import { useDropzone } from "react-dropzone";
import Button from "../Button/Button";

const Form = () => {
 const CountryNigeria = Country.getCountryByCode("NG");
 const NigeriaStates = State.getStatesOfCountry("NG");

 // Initial state of property
 const [propertyDetails, setPropertyDetails] = useState({
  fullName: "",
  address: "",
  unitNumber: "",
  country: '',
  state: NigeriaStates,
  roomType: "",
  price: "",
  description: "",
 });
 // const handleInputChange = (e) => {
 //  setPropertyDetails({
 //   ...propertyDetails,
 //   fullName: e.target.value,
 //   address: e.target.value,
 //   unitNumber: e.target.value,
 //   country: CountryNigeria,
 //   state: [...NigeriaStates],
 //   price: e.target.value,
 //   description: e.target.value,
 //  });
 // };
 // uploading a fle starts here
 // const [file, setFile] = useState(null);
 const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
 const files = acceptedFiles.map((file) => (
  <li key={file.path}>
   {file.path} - {file.size} bytes
  </li>
 ));
 // handle form submit
 const handleSubmit = (e) => {
  e.preventDefault();
 };

 const myState = propertyDetails.state;
 console.log(myState);
 return (
  <Forms>
   <div className="details">
    <div className="input">
     <Label name={"name"} />
     <input
      type="text"
      name=""
      id="fullname"
      placeholder="Enter name"
      value={propertyDetails.fullName}
      onChange={(e)=>{setPropertyDetails({...propertyDetails, fullName: e.target.value})}}
     />
    </div>
    <div className="input">
     <Label name={"address"} />
     <input
      type="text"
      name=""
      id="address"
      placeholder="Enter address"
      value={propertyDetails.address}
      onChange={(e)=>{setPropertyDetails({...propertyDetails, address: e.target.value})}}
     />
    </div>
    <div className="input">
     <Label name={"unit number"} />
     <input
      type="number"
      name=""
      id="unit"
      placeholder="Enter unit number"
      value={propertyDetails.unitNumber}
      onChange={(e)=>{setPropertyDetails({...propertyDetails, unitNumber: e.target.value})}}
     />
    </div>
   </div>
   <div className="details">
    <div className="input">
     <Label name={"country"} />
     <select name="country" id="country" onChange={(e)=>{setPropertyDetails({...propertyDetails, country: e.target.value})}}>
      <option>{propertyDetails.country.name}</option>
     </select>
    </div>
    <div className="input">
     <Label name={"state"} />
     <select name="state" id="state" value={propertyDetails.state} onChange={(e)=>{setPropertyDetails({...propertyDetails, state: e.target.value})}}>
      
      {myState.length > 0 && myState.map(({ name, isoCode }) => {
       console.log(name)
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
     <select name="room" id="room" onChange={(e)=>{setPropertyDetails({...propertyDetails, roomType: e.target.value})}}>
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
      onChange={(e)=>{setPropertyDetails({...propertyDetails, description: e.target.value})}}
     ></textarea>
    </div>
    <div id="upload">
     <Label name={"upload photos"} />
     <div {...getRootProps({ className: "dropzone" })} className="dragarea">
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
     </div>
     <aside>
      <ul>{files}</ul>
     </aside>
    </div>
   </div>
   <div className="btn">
    <Button name="add new property" onClick={handleSubmit} />
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
  #upload {
   .dragarea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 3px dotted #f4511e;
    height: 50%;

    p {
     font-size: 1.3rem;
     font-weight: 500;
     text-align: center;
    }
   }
  }
 }
 .btn {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  button {
   padding: 0.5rem 4rem;
   font-size: 2rem;
   display: inline-block;
   background-color: #f4511e;
   color: white;
   text-transform: capitalize;
   &:after {
    background-color: #e1a291;
   }
  }
 }

 /* for mobile landscape view */
 @media (min-width: 280px) and (max-width: 568px){
  input,
 select,
 textarea{
  font-size: 1rem;
 }
  .details{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: left;
  }
 }
`;
export default Form;
