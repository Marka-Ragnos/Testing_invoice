import React from "react";
import { Pagination } from "react-bootstrap";

const BuyersPagination = () => {
   let active = 2;
   let items = [];
   for (let number = 1; number <= 3; number++) {
      items.push(
         <Pagination.Item key={number} active={number === active}>
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
