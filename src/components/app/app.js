import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar";
import HomePage from "../../pages/home-page/home-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import SignInPage from "../../pages/sign-in-page/sign-in-page";
import "./app.css";
import { Route, Switch } from "react-router-dom";

const App = (props) => {
   const { history } = props;

   return (
      <div className="app">
         <Container fluid="xl">
            <Row xs={1} sm={1}>
               <Col className="px-0" md={3}>
                  <Sidebar />
               </Col>
               <Col className="px-0" md={9}>
                  <Switch>
                     <Route
                        history={history}
                        path="/"
                        exact
                        component={HomePage}
                     />
                     <Route
                        history={history}
                        path="/sign-in-page"
                        component={SignInPage}
                     />
                     <Route
                        history={history}
                        path="/not-found-page"
                        component={NotFoundPage}
                     />
                  </Switch>
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default App;
