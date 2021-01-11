import React from "react";
import { Pagination } from "react-bootstrap";

const BuyersPagination = ({ setPaginationCount, paginationCount, length }) => {
   let items = [];
   for (let number = 1; number <= length; number++) {
      items.push(
         <Pagination.Item
            key={number}
            active={number === paginationCount}
            onClick={() => setPaginationCount(number)}
         >
            {number}
         </Pagination.Item>
      );
   }

   return (
      <>
         <Pagination>{items}</Pagination>
      </>
   );
};

export default BuyersPagination;
