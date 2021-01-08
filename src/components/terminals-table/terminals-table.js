import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getTerminals } from "../../store/terminals/selectors";


const TerminalsTable = ({ terminals = [] }) => {
   return (
      <>
         <Table
            striped
            bordered
            hover
            variant="dark"
            responsive
            className="terminals-table"
         >
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Название</th>
                  <th>Описание</th>
               </tr>
            </thead>
            <tbody>
               {terminals.map((item, index) => (
                  <tr key={index + Math.floor(Math.random())}>
                     <td className="terminals-table__td-with-button">
                        {item.id}
                        <button
                           className="terminals-table__button"
                           type="button"
                           onClick={() => {}}
                        >
                           Удалить
                        </button>
                     </td>
                     <td>{item.nameTerminal}</td>
                     <td>{item.description}</td>
                  </tr>
               ))}
            </tbody>
         </Table>
      </>
   );
};

const mapStateToProps = (state) => ({
   terminals: getTerminals(state),
});

// const mapDispatchToProps = (dispatch) => ({
//    setTerminals: (terminal) => {
//       dispatch(ActionCreator.setTerminals(terminal));
//    },
// });

export default connect(mapStateToProps)(TerminalsTable);
