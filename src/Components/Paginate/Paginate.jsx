import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({properties}) => {
 
 
 const itemsPerPage = 8;

 const pageCount = Math.ceil(properties.length / propertyPerPage);
 // onPageChange
 const handlePageChange = ({ selected }) => {
  setPageNumber(selected);
 };
 return (
  <>
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
  </>
 );
};

export default Paginate;
