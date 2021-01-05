import React from "react";
import { Table } from "react-bootstrap";
import archiveBuyers from "../../mocks/mocks";
// import {filterIndividualBuyer} from "../../utils";
// import { connect } from "react-redux";
// import { getBuyerWithId } from "../../store/app/selectors";


const individualBuyer = archiveBuyers[0];

const IndividualBuyerPage = ({id}) => {

   return (
      <div className="individual-buyer-page">
         <h1 className="individual-buyer-page__title">
            Покупатель {individualBuyer.name}
         </h1>
         <Table striped bordered hover variant="dark" responsive>
            <thead>
               <tr>
                  <th>ID покупателя</th>
                  <th>Имя покупателя</th>
                  <th>Средний чек</th>
                  <th>Количество покупок</th>
                  <th>Общая выручка</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>{individualBuyer.id}</td>
                  <td>{individualBuyer.name}</td>
                  <td>${individualBuyer.check}</td>
                  <td>{individualBuyer.purchases}</td>
                  <td>${individualBuyer.total}</td>
               </tr>
            </tbody>
         </Table>
      </div>
   );
};

// const mapStateToProps = (state) => ({
//    individualBuyer: getBuyerWithId(state, id),
// });

export default IndividualBuyerPage;
// export default connect(mapStateToProps)(IndividualBuyerPage);
