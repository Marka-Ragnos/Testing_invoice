import React, { useState } from "react";
import { connect } from "react-redux";
import { getBuyers } from "../../store/buyers/selectors";
import BuyersTable from "../../components/buyers-table/buyers-table";
import BuyersPagination from "../../components/buyers-pagination/buyers-pagination";
import BuyersSortGroup from "../../components/buyers-sort-group/buyers-sort-group";

const BuyersPage = ({ buyers }) => {
   const [count, setCount] = useState("all");
   const [paginationCount, setPaginationCount] = useState(0);

   return (
      <div className="buyers-page">
         <h1 className="buyers-page__title">Покупатели</h1>
         <BuyersTable
            count={count}
            buyers={buyers}
            paginationCount={paginationCount}
         />
         {Number(count) === 5 && (
            <BuyersPagination
               setPaginationCount={setPaginationCount}
               paginationCount={paginationCount}
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
