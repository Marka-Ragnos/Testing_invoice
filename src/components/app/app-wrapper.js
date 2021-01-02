import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AppWrapper = ({ children, renderProp }) => {
   return (
      <Container fluid="xl">
         <Row xs={1} sm={1}>
            <Col className="px-0" md={3}>
               {renderProp()}
            </Col>
            <Col className="px-0" md={9}>
               {children}
            </Col>
         </Row>
      </Container>
   );
};

export default AppWrapper;
