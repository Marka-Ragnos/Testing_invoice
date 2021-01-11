import React from "react";
import { Form, Col } from "react-bootstrap";

const BuyersSortGroup = ({ setCount }) => {
   return (
      <Form className="buyers-group">
         <Form.Row className="align-items-center">
            <Col xs="auto" className="my-1">
               <Form.Label
                  className="mr-sm-2"
                  htmlFor="inlineFormCustomSelect"
                  srOnly
               >
                  Preference
               </Form.Label>
               <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                  onChange={(evt) => setCount(evt.target.value)}
               >
                  <option value="all">select the number of buyers</option>
                  <option value="5">Five</option>
                  <option value="10">Ten</option>
                  <option value="15">Fifteen</option>
               </Form.Control>
            </Col>
         </Form.Row>
      </Form>
   );
};

export default BuyersSortGroup;
