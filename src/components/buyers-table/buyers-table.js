import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSorttableData } from "../../utils";

const BuyersTable = (props) => {
   const { items, requestSort, sortConfig } = useSorttableData(
      props.archiveBuyers
   );
	const [textSearch, setSearch] = useState("");
	
	console.log(textSearch);
	
   const onSearchChange = (evt) => {
      setSearch(evt.target.value);
   };

   const getClassNamesFor = (name) => {
      if (!sortConfig) {
         return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
   };

   return (
      <>
         <input
            className="buyers-page__search"
            type="text"
            placeholder="Поиск по именам.."
            title="Введите имя"
            value={textSearch}
            onChange={onSearchChange}
         ></input>
         <Table striped bordered hover variant="dark" responsive>
            <thead>
               <tr>
                  <th>ID покупателя</th>
                  <th>Имя покупателя</th>
                  <th>
                     <button
                        type="button"
                        onClick={() => requestSort("check")}
                        className={getClassNamesFor("check")}
                     >
                        Средний чек
                     </button>
                  </th>
                  <th>
                     <button
                        type="button"
                        onClick={() => requestSort("purchases")}
                        className={getClassNamesFor("purchases")}
                     >
                        Количество покупок
                     </button>
                  </th>
                  <th>
                     <button
                        type="button"
                        onClick={() => requestSort("total")}
                        className={getClassNamesFor("total")}
                     >
                        Общая выручка
                     </button>
                  </th>
               </tr>
            </thead>
            <tbody>
               {items.map((item, index) => (
                  <tr key={item.id}>
                     <td>
                        <Link to={`/buyers/${item.id}`} className="buyersId">
                           {index + 1}
                        </Link>
                     </td>
                     <td>{item.name}</td>
                     <td>${item.check}</td>
                     <td>{item.purchases}</td>
                     <td>${item.total}</td>
                  </tr>
               ))}
            </tbody>
         </Table>
      </>
   );
};

export default BuyersTable;
