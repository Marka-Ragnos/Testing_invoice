import React, { useState } from "react";
import { connect } from "react-redux";
import { getBuyers } from "../../store/buyers/selectors";
import BuyersTable from "../../components/buyers-table/buyers-table";
import BuyersPagination from "../../components/buyers-pagination/buyers-pagination";
import BuyersSortGroup from "../../components/buyers-sort-group/buyers-sort-group";

const BuyersPage = ({ buyers }) => {
   const [count, setCount] = useState("all");
   const [paginationCount, setPaginationCount] = useState(1);
   const paginationLength =
      buyers.length > count ? Math.ceil(buyers.length / count) : false;

   return (
      <div className="buyers-page">
         <h1 className="buyers-page__title">Покупатели</h1>
         <BuyersTable
            count={count}
            buyers={buyers}
            paginationCount={paginationCount}
         />
         {paginationLength && (
            <BuyersPagination
               setPaginationCount={setPaginationCount}
               paginationCount={paginationCount}
               length={paginationLength}
            />
         )}
         <BuyersSortGroup setCount={setCount} />
      </div>
   );
};

const mapStateToProps = (state) => ({
   buyers: getBuyers(state),
});

export default connect(mapStateToProps)(BuyersPage);
