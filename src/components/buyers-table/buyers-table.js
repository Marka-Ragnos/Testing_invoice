import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSorttableData, search, getClassNamesFor } from "../../utils";
import { Path } from "../../const";

const BuyersTable = ({ buyers, count, paginationCount }) => {
   const { items, requestSort, sortConfig } = useSorttableData(buyers);

   const [textSearch, setSearch] = useState("");

   const onSearchChange = (evt) => {
      setSearch(evt.target.value);
   };

   const visibleItems = search(items, textSearch);

   const step = paginationCount === 1 ? 0 : paginationCount * count - count;

   const calculatedCount =
      (count === "all" && visibleItems.length) || step + Number(count);

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
                        className={getClassNamesFor("check", sortConfig)}
                     >
                        Средний чек
                     </button>
                  </th>
                  <th>
                     <button
                        type="button"
                        onClick={() => requestSort("purchases")}
                        className={getClassNamesFor("purchases", sortConfig)}
                     >
                        Количество покупок
                     </button>
                  </th>
                  <th>
                     <button
                        type="button"
                        onClick={() => requestSort("total")}
                        className={getClassNamesFor("total", sortConfig)}
                     >
                        Общая выручка
                     </button>
                  </th>
               </tr>
            </thead>
            <tbody>
               {visibleItems.slice(step, calculatedCount).map((item) => (
                  <tr key={item.id}>
                     <td>
                        <Link
                           to={`${Path.BUYERS_INDIVIDUAL}${item.id}`}
                           className="buyersId"
                        >
                           {item.id}
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
