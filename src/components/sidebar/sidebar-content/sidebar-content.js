import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { getAvatar } from "../../../store/user/selectors";
import Navigation from "../../navigation/navigation";

const SidebarContent = ({ isOpen, avatar }) => {
   return (
      <Container
         className={`sidebar-content ${isOpen ? "sidebar-content--open" : ""}`}
      >
         <Row className="justify-content-center avatar">
            <Col xs={5} md={8}>
               <Image src={avatar} roundedCircle fluid />
            </Col>
         </Row>
         <Nav
            defaultActiveKey="/"
            className="flex-column navigation"
            variant="pills"
         >
            <Navigation />
         </Nav>
         <span className="copyright">Copyright &#169; 2020</span>
      </Container>
   );
};

const mapStateToProps = (state) => ({
   avatar: getAvatar(state),
});

export default connect(mapStateToProps)(SidebarContent);
