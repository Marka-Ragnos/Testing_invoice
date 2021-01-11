import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { uniqueID } from "../../utils";
import { ActionCreator as TerminalsActionCreator } from "../../store/terminals/terminals";
import { getTerminals } from "../../store/terminals/selectors";

const TerminalsForm = ({ setTerminal, terminals }) => {
   const [terminal, setInfo] = useState({ nameTerminal: "", description: "" });

   const addTerminal = () => {
      terminal.id = uniqueID();
      const newTerminal = [...terminals, terminal];
      setTerminal(newTerminal);
      setInfo({ nameTerminal: "", description: "" });
   };

   const onChange = (evt) => {
      setInfo({ ...terminal, [evt.target.name]: evt.target.value });
   };

   const onSubmit = (evt) => {
      evt.preventDefault();
      addTerminal();
   };

   return (
      <Form className="terminals-form" onSubmit={onSubmit}>
         <Form.Group>
            <Form.Label>Название терминала</Form.Label>
            <Form.Control
               type="text"
               name="nameTerminal"
               value={terminal.nameTerminal}
               onChange={onChange}
            />
         </Form.Group>
         <Form.Group controlId="Textarea">
            <Form.Label>Описание терминала</Form.Label>
            <Form.Control
               as="textarea"
               rows={5}
               name="description"
               value={terminal.description}
               onChange={onChange}
            />
         </Form.Group>
         <Button
            className="custom__button"
            as="input"
            type="button"
            value="Добавить"
            onClick={onSubmit}
         />
      </Form>
   );
};

const mapStateToProps = (state) => ({
   terminals: getTerminals(state),
});

const mapDispatchToProps = (dispatch) => ({
   setTerminal: (terminal) => {
      dispatch(TerminalsActionCreator.setTerminal(terminal));
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(TerminalsForm);
