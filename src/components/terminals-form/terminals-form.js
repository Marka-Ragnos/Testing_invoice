import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { ActionCreator } from "../../store/terminals/terminals";
// import { getTerminals } from "../../store/terminals/selectors";
import { uniqueID } from "../../utils";

const TerminalsForm = ({ setTerminals }) => {
   const [terminal, setInfo] = useState({ nameTerminal: "", description: "" });

   console.log(terminal);

   const onChange = (evt) => {
      setInfo({ ...terminal, [evt.target.name]: evt.target.value });
   };

	const addTerminal = () => {
		terminal.id = uniqueID();
		setTerminals(terminal);
		console.log("Store", terminal);
   };

   return (
      <Form className="terminals-form">
         <Form.Group>
            <Form.Label>Название терминала</Form.Label>
            <Form.Control type="text" name="nameTerminal" onChange={onChange} />
         </Form.Group>
         <Form.Group controlId="Textarea">
            <Form.Label>Описание терминала</Form.Label>
            <Form.Control
               name="description"
               onChange={onChange}
               as="textarea"
               rows={5}
            />
         </Form.Group>
         <Button
            className="custom__button"
            as="input"
            type="button"
            value="Добавить"
            onClick={addTerminal}
         />
      </Form>
   );
};

// const mapStateToProps = (state) => ({
//    buyers: getBuyersWithTotal(state),
// });

const mapDispatchToProps = (dispatch) => ({
   setTerminals: (terminal) => {
      dispatch(ActionCreator.setTerminals(terminal));
   },
});

export default connect(null, mapDispatchToProps)(TerminalsForm);
