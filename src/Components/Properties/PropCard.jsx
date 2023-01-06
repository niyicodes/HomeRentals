import React from "react";
import styled from "styled-components";
import prop1 from "/img/prop1.jpg";
import { MdOutlineKingBed, MdOutlineBathtub } from "react-icons/md";
import { CgHashtag } from "react-icons/cg";
const PropCard = ({ name, hometype, image, price, bed, bath, squarefeet, id }) => {
 return (
  <PropertiesCard>
   <img src={prop1} alt="" />
   <div className="propdetails">
    <p className="prop-name">{name}</p>
    <small className="prop-type">{hometype}</small>
    <h4 className="prop-price">{price}/month</h4>
   </div>
   <div className="prop-features">
    <div className="feature">
     <MdOutlineKingBed />
     <p>{bed}</p>
    </div>
    <div className="feature">
     <MdOutlineBathtub />
     <p>{bath}</p>
    </div>
    <div className="feature">
     <CgHashtag />
     <p>{squarefeet}</p>
    </div>
   </div>
  </PropertiesCard>
 );
};

const PropertiesCard = styled.div`
 position: relative;
 width: 280px;
 height: 400px;
 border-radius: 20px;
 border: none;
 outline: none;
 overflow: hidden;
 -webkit-box-shadow: 1px 2px 21px 0px rgba(0, 0, 0, 0.66);
 box-shadow: 1px 2px 21px 0px rgba(0, 0, 0, 0.66);
 img {
  width: 100%;
  object-fit: contain;
 }
 .propdetails {
  padding: 0.7rem;
  font-family: "DM Sans", sans-serif;
  p {
   font-size: 1.2rem;
   font-weight: 700;
   text-transform: capitalize;
   padding: 0.5rem 0;
  }
  small {
   color: #818181;
   font-size: 0.9rem;
  }
  h4 {
   font-size: 1.3rem;
   font-weight: 700;
   text-transform: capitalize;
   color: #f4511e;
   padding-top: 0.5rem;
  }
 }
 .prop-features {
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 3px solid #E4E4E4;
  display: flex;
  justify-content: space-around;
  padding:1rem 0;
  font-family: "DM Sans", sans-serif;

  .feature{
   display: flex;
   justify-content: center;
   align-items: center;
   gap: .3rem;
  }
 }
`;

export default PropCard;
