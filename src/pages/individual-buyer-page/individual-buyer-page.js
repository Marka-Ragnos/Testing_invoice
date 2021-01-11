import React from "react";
import { connect } from "react-redux";
import { Table, Jumbotron } from "react-bootstrap";
import { getIndividualBuyer } from "../../store/buyers/selectors";

const IndividualBuyerPage = ({ individualBuyer }) => {
   if (!individualBuyer) {
      return (
         <Jumbotron className="missing-buyer">
            <h1>Нет такого покупателя!</h1>
         </Jumbotron>
      );
   }
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

const mapStateToProps = (state, { id }) => ({
   individualBuyer: getIndividualBuyer(id)(state),
});

export default connect(mapStateToProps)(IndividualBuyerPage);
