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
  Name: "",
  address: "",
  unitNumber: "",
  country: CountryNigeria,
  state: NigeriaStates,
  roomType: "",
  price: "",
  description: "",
 });
 const handleInputChange = (e) => {
  setPropertyDetails({
   ...propertyDetails,
   Name: e.target.value,
   address: e.target.value,
   unitNumber: e.target.value,
   country: e.target.value,
   state: e.target.value,
   price: e.target.value,
   description: e.target.value,
  });
 };
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
      value={propertyDetails.Name}
      onChange={handleInputChange}
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
      onChange={handleInputChange}
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
      onChange={handleInputChange}
     />
    </div>
   </div>
   <div className="details">
    <div className="input">
     <Label name={"country"} />
     <select name="country" id="country" onChange={handleInputChange}>
      <option>{propertyDetails.country.name}</option>
     </select>
    </div>
    <div className="input">
     <Label name={"state"} />
     <select name="state" id="state" value={propertyDetails.state}>
      {myState.map(({ name, isoCode }) => {
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
     <select name="room" id="room" onChange={handleInputChange}>
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
      onChange={handleInputChange}
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
  }
 }
`;
export default Form;
