import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import PropCard from "./PropCard";
import Paginate from '../Paginate/Paginate'
import property from "./property";

const Properties = () => {
 return (
  <Prop>
   <div className="top">
    <h3>
     <span>List o</span>f Properties
    </h3>
    <Button name="View all property" />
   </div>
   <main className="properties">
    {
     property.map(({ name, hometype, image, price, bed, bath, squarefeet, id }) => {
      return(
       <PropCard key={id} name={name} hometype={hometype} price={price} bed={bed} bath={bath} squarefeet={squarefeet}/>
      )
     })
    }
    
    {/* <Paginate properties={properties} /> */}
   </main>
  </Prop>
 );
};
const Prop = styled.section`
 background-color: #f5f5f5;
 padding-bottom: 3rem;
 .top {
  margin: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  text-transform: capitalize;
  h3 {
   font-family: "Inter", sans-serif;
   font-size: 2rem;
   color: black;
   span {
    border-bottom: 5px solid #f4511e;
    padding-bottom: 1.5px;
   }
  }
  button {
   background-color: #f4511e;
   font-size: 1.2rem;
   text-transform: capitalize;
   &:after {
    background-color: #23a6f0;
   }
  }
 }
 .properties {
  display: grid;
  grid-template-columns: repeat(4, 350px);
  /* grid-column-gap: 1rem; */
  grid-row-gap: 2.5rem;
  margin: 2rem 5rem;
 }
`;
export default Properties;
