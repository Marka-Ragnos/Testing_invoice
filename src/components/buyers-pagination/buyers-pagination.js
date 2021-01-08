import React from "react";
import { Pagination } from "react-bootstrap";

const BuyersPagination = ({ setPaginationCount, paginationCount }) => {
   let active = paginationCount;
   let items = [];
   for (let number = 1; number <= 3; number++) {
      items.push(
         <Pagination.Item
            key={number}
            active={number === active}
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
