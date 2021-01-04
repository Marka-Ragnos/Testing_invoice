import React from "react";
import { Form, Button } from "react-bootstrap";

const TerminalsForm = () => {
   return (
      <Form className="terminals-form">
         <Form.Group>
            <Form.Label>Название терминала</Form.Label>
            <Form.Control type="text" />
         </Form.Group>
         <Form.Group controlId="Textarea">
            <Form.Label>Описание терминала</Form.Label>
            <Form.Control as="textarea" rows={5} />
         </Form.Group>
         <Button
            className="custom__button"
            as="input"
            type="button"
            value="Добавить"
         />
      </Form>
   );
};

export default TerminalsForm;
