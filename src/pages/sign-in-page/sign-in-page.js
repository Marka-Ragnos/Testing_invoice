import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Button, Col } from "react-bootstrap";
import { Status } from "../../const";
import { ActionCreator as UserActionCreator } from "../../store/user/user";
import API from "../../api";

const SignInPage = ({ setGitHubData, setAuthorizationStatus }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [emailDirty, setEmailDirty] = useState(false);
   const [passwordDirty, setPasswordDirty] = useState(false);
   const [emailError, setEmailError] = useState("Логин не может быть пустым");
   const [passwordError, setPasswordError] = useState(
      "Пароль не может быть пустым"
   );
   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      if (passwordError) {
         setFormValid(false);
      } else {
         setFormValid(true);
      }
   }, [passwordError]);

   const emailHandler = (evt) => {
      setEmail(evt.target.value);
      if (evt.target.value.length < 3) {
         setEmailError("Логин должен быть не менее 3 символов");
      } else {
         setEmailError("");
      }
   };

   const passwordHandler = (evt) => {
      setPassword(evt.target.value);
      const re = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm;
      if (!re.test(String(evt.target.value))) {
         setPasswordError(
            "Пароль должен быть не менее 8 символов и иметь 1 заглавную и 1 прописную букву"
         );
         if (!evt.target.value) {
            setPasswordError("Пароль не может быть пустым");
         }
      } else {
         setPasswordError("");
      }
   };

   const blurHandler = (evt) => {
      switch (evt.target.name) {
         case "email":
            setEmailDirty(true);
            break;
         case "password":
            setPasswordDirty(true);
            break;
         default:
            break;
      }
   };

   const api = new API();
   const handleSubmit = (evt) => {
      evt.preventDefault();
      api.loginUser(email).then((res) => {
         if (res.message && res.message === "Not Found") {
            setEmail("");
            setPassword("");
            alert("Wrong credentials");
         } else {
            setGitHubData(res);
            setEmail("");
            setPassword("");
            setAuthorizationStatus(Status.AUTHORIZED);
         }
      });
   };

   return (
      <div className="sign-in-page">
         <h1>You are not logged in, please register</h1>
         <Form className="sign-in-page__form" onSubmit={handleSubmit}>
            <Form.Row className="sign-in-page__form-row">
               <Form.Group className="sign-in-page__form-item" as={Col} md="6">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                     onChange={emailHandler}
                     value={email}
                     onBlur={blurHandler}
                     name="email"
                     type="text"
                     placeholder="Enter username"
                     required
                  />
                  {emailDirty && emailError && (
                     <div style={{ color: "red" }}>{emailError}</div>
                  )}
               </Form.Group>
               <Form.Group className="sign-in-page__form-item" as={Col} md="6">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     onChange={passwordHandler}
                     value={password}
                     onBlur={blurHandler}
                     name="password"
                     type="password"
                     placeholder="Enter password"
                     required
                  />
                  {passwordDirty && passwordError && (
                     <div style={{ color: "red" }}>{passwordError}</div>
                  )}
               </Form.Group>
            </Form.Row>
            <Form.Group>
               <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
               />
            </Form.Group>
            <Button
               disabled={!formValid}
               className="custom__button"
               type="submit"
            >
               Log in
            </Button>
         </Form>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   setGitHubData: (data) => {
      dispatch(UserActionCreator.setGitHubData(data));
   },
   setAuthorizationStatus: (authorizationStatus) => {
      dispatch(UserActionCreator.setAuthorizationStatus(authorizationStatus));
   },
});

export default connect(null, mapDispatchToProps)(SignInPage);
