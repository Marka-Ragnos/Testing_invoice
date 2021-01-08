import React from "react";
import { connect } from "react-redux";
import { getBuyersWithTotal } from "../../store/buyers/selectors";
import BuyersTable from "../../components/buyers-table/buyers-table";
import BuyersPagination from "../../components/buyers-pagination/buyers-pagination";
import BuyersSortGroup from "../../components/buyers-sort-group/buyers-sort-group";

const BuyersPage = ({ buyers }) => {
   return (
      <div className="buyers-page">
         <h1 className="buyers-page__title">Покупатели</h1>
         <BuyersTable buyers={buyers} />
         <BuyersPagination />
         <BuyersSortGroup />
      </div>
   );
};

const mapStateToProps = (state) => ({
   buyers: getBuyersWithTotal(state),
});

// const mapDispatchToProps = (dispatch) => ({
//    loadFavoriteOffers: () => dispatch(OffersOperation.loadFavoriteOffers()),
// });

export default connect(mapStateToProps)(BuyersPage);
