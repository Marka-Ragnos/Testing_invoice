import React, { useState } from "react";
import { Form, Button, Col, InputGroup } from "react-bootstrap";

// const SignInPage = () => {
//    return (
//       <div className="sign-in-page">
//          <h1>You are not logged in, please register</h1>
//          <Form className="sign-in-page__form">
//             <Form.Group controlId="formBasicEmail">
//                <Form.Label>Email address</Form.Label>
//                <Form.Control type="email" placeholder="Enter email" />
//                <Form.Text className="text-muted">
//                   We'll never share your email with anyone else.
//                </Form.Text>
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//                <Form.Label>Password</Form.Label>
//                <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Form.Group controlId="formBasicCheckbox">
//                <Form.Check type="checkbox" label="Check me out" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//                Submit
//             </Button>
//          </Form>
//       </div>
//    );
// };

// export default SignInPage;

const SignInPage = () => {
   const [validated, setValidated] = useState(false);

   const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
      }

      setValidated(true);
   };

   return (
      <div className="sign-in-page">
         <h1>You are not logged in, please register</h1>
         <Form
            className="sign-in-page__form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
         >
            <Form.Row className="sign-in-page__form-row">
               <Form.Group
                  className="sign-in-page__form-item"
                  as={Col}
                  md="6"
                  controlId="validationCustomUsername"
               >
                  <Form.Label>Username</Form.Label>
                  <InputGroup>
                     <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                           @
                        </InputGroup.Text>
                     </InputGroup.Prepend>
                     <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                     />
                     <Form.Control.Feedback type="invalid">
                        Please choose a username.
                     </Form.Control.Feedback>
                  </InputGroup>
               </Form.Group>
               <Form.Group
                  className="sign-in-page__form-item"
                  as={Col}
                  md="6"
                  controlId="formBasicPassword"
               >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
               </Form.Group>
            </Form.Row>
            <Form.Group>
               <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
               />
            </Form.Group>
            <Button type="submit">Enter</Button>
         </Form>
      </div>
   );
};

export default SignInPage;
