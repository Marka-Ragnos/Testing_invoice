import React from "react";
import { Table } from "react-bootstrap";

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
                  <th>№</th>
                  <th>Название</th>
                  <th>Описание</th>
               </tr>
            </thead>
            <tbody>
               {terminals.map((item, index) => (
                  <tr key={index + Math.floor(Math.random())}>
                     <td>
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

export default TerminalsTable;
