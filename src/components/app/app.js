import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar";
import HomePage from "../../pages/home-page/home-page";
import "./app.css";

function App() {
   return (
      <div className="app">
         <Container fluid="xl">
            <Row md={2} xs={1} sm={1}>
               <Col className="px-0" md={3}>
                  <Sidebar />
               </Col>
               <Col className="px-0" md={9}>
                  <HomePage />
               </Col>
            </Row>
         </Container>
      </div>
   );
}

export default App;
