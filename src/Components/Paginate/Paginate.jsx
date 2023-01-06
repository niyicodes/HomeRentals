import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Paginate = ({properties}) => {
 
 const [itemOffset, setItemOffset] = useState(0);
 const itemsPerPage = 6;
 const endOffset = itemOffset + itemsPerPage;
 const currentItems = properties.slice(itemOffset, endOffset);
 const pageCount = Math.ceil(properties.length / itemsPerPage);
 

 // Invoke when user click to request another page.
 const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % properties.length; 
  setItemOffset(newOffset);
 };
 return (
  <>
   <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
   />
  </>
 );
};

export default Paginate;
