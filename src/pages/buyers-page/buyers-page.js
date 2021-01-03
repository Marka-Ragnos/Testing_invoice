import React from "react";
import BuyersTable from "../../components/buyers-table/buyers-table";
import BuyersPagination from "../../components/buyers-pagination/buyers-pagination";
import BuyersSortGroup from "../../components/buyers-sort-group/buyers-sort-group";
import archiveBuyers from "../../mocks/mocks";


const BuyersPage = () => {
   return (
      <div className="buyers-page">
         <h1 className="buyers-page__title">Покупатели</h1>
         <BuyersTable archiveBuyers={archiveBuyers} />
         <BuyersPagination />
         <BuyersSortGroup />
      </div>
   );
};

export default BuyersPage;
