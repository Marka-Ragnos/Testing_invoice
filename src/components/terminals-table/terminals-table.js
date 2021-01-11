import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { getTerminals } from "../../store/terminals/selectors";
import { ActionCreator as TerminalsActionCreator } from "../../store/terminals/terminals";

const TerminalsTable = ({ terminals, deleteTerminal }) => {
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
                           onClick={() => deleteTerminal(item.id)}
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

const mapDispatchToProps = (dispatch) => ({
   deleteTerminal: (terminalId) => {
      dispatch(TerminalsActionCreator.deleteTerminal(terminalId));
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(TerminalsTable);
