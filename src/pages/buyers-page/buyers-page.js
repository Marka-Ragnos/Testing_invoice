import React from "react";
import { Table } from "react-bootstrap";

const Buyers = () => {
   return (
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
               <td>1</td>
               <td>Anakin Skywalker</td>
               <td>1035</td>
               <td>2</td>
               <td>2070</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Luke Skywalker</td>
               <td>507</td>
               <td>1</td>
               <td>507</td>
            </tr>
            <tr>
               <td>3</td>
               <td>Han Solo</td>
               <td>1789</td>
               <td>3</td>
               <td>5367</td>
            </tr>
            <tr>
               <td>4</td>
               <td>Kylo Ren</td>
               <td>1002</td>
               <td>3</td>
               <td>3003</td>
            </tr>
         </tbody>
      </Table>
   );
};

export default Buyers;
