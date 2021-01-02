import React from "react";
import { Form, Button } from "react-bootstrap";

const SignInPage = () => {
   return (
      <div className="sign-in-page">
         <h1>You are not logged in, please register</h1>
         <Form className="sign-in-page__form">
            <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
               </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
               Submit
            </Button>
         </Form>
      </div>
   );
};

export default SignInPage;
