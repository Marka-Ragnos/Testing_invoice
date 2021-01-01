import React from "react";
import "./avatar.css";
import { Container, Row, Col, Image} from "react-bootstrap";


function Avatar() {
   return (
      <Container>
         <Row className="justify-content-center avatar">
            <Col xs={8} md={8}>
               <Image src="/avatar-primer.jpg" roundedCircle fluid />
            </Col>
         </Row>
      </Container>
   );
}

export default Avatar;
