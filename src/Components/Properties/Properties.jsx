import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import PropCard from "./PropCard";
import ReactPaginate from "react-paginate";
import property from "./property";

const Properties = () => {
 // a state to store the properties
 const [properties, setProperties] = useState(property.slice(0, 16));
 const [pageNumber, setPageNumber] = useState(0);
 // number of properties to be displayed 
 const propertyPerPage = 6;
 // to determine the number of properties displayed or to be displayed
 const pagesVisited = pageNumber * propertyPerPage;

 // Function to display the properties on press of the pagination button
 const displayProperties = properties
  .slice(pagesVisited, pagesVisited + propertyPerPage)
  .map(({ name, hometype, image, price, bed, bath, squarefeet, id }) => {
   return (
    <PropCard
     key={id}
     name={name}
     image={image}
     hometype={hometype}
     price={price}
     bed={bed}
     bath={bath}
     squarefeet={squarefeet}
    />
   );
  });

 const pageCount = Math.ceil(properties.length / propertyPerPage);
 // onPageChange
 const handlePageChange = ({ selected }) => {
  setPageNumber(selected);
 };
 return (
  <Prop>
   <div className="top">
    <h3>
     <span>List o</span>f Properties
    </h3>
    <Button name="View all property" />
   </div>
   <main className="properties">
    <div className="propertyarea">{displayProperties}</div>
    <div className="paginationarea">
     <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      onPageChange={handlePageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< Previous"
      renderOnZeroPageCount={null}
      containerClassName="paginationsBtn"
      activeClassName="paginationActive"
     />
    </div>
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
   padding: .7rem 2rem;
   text-transform: capitalize;
   &:after {
    background-color: #23a6f0;
   }
  }
 }
 .properties {
  .propertyarea {
   display: grid;
   grid-template-columns: repeat(3, auto);
   gap: 4rem;
   grid-row-gap: 2.5rem;
   place-content: center;
   width: 100%;
  }
  .paginationarea {
   display: flex;
   flex-direction: row;
   align-items: center;
   padding: 2rem 0;
   font-family: "Inter", sans-serif;
   .paginationsBtn {
    list-style: none;
    display: flex;
    align-items: center;
    align-self: center;
    margin: 1rem auto;
   }

   .paginationsBtn a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 2px solid #E9E9E9;
    color: #F4511E;
    cursor: pointer;
   }

   .paginationsBtn a:hover {
    color: white;
    background-color: #F4511E;
   }

   .paginationActive a {
    color: white;
    background-color: #F4511E;
   }
  }
 }

 /* for mobile landscape view */
 @media (min-width: 280px) and (max-width: 480px){
  .top{
   flex-direction: column;
   gap: 2rem;
   justify-content: space-evenly;
   margin-top: 1rem;
   padding: 0.5rem;

   h3{
    line-height: 1.4;
   }
   button{
    font-size: 0.6rem;
    padding: 1rem;
   }
  }
  .properties{
   .propertyarea{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
   }
  }
 }

  /* for tablets and landscape view */
  @media (min-width: 481px) and (max-width: 930px){
   .properties{
    .propertyarea{
     display: grid;
     grid-template-columns: repeat(2, auto);
     gap: 1rem;
     place-items: center;
    }
   }
  }

  @media (min-width: 931px) and (max-width: 1200px){
   .properties{
    .propertyarea{
     grid-template-columns: repeat(3, auto);
     gap: .5rem;
     grid-row-gap: 1.5rem;
     place-items: center;
     /* width: 95%; */
    }
   }
  }
`;
export default Properties;
