import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SidebarContent = ({ isOpen }) => {
   return (
      <Container
         className={`sidebar-content ${
            isOpen ? "sidebar-content--open" : ""
         }`}
      >
         <Row className="justify-content-center avatar">
            <Col xs={5} md={8}>
               <Image src="/images/avatar-primer.jpg" roundedCircle fluid />
            </Col>
         </Row>
         <Nav
            defaultActiveKey="/"
            className="flex-column navigation"
            variant="pills"
         >
            <NavLink className="navigation__item" to="/">
               Главная
            </NavLink>
            <NavLink className="navigation__item" to="/sign-in-page">
               Регистрация
            </NavLink>
            <NavLink className="navigation__item" to="/terminals-page">
               Терминалы
            </NavLink>
            <NavLink className="navigation__item" to="/buyers-page">
               Покупатели
            </NavLink>
         </Nav>
         <span className="copyright">Copyright &#169; 2020</span>
      </Container>
   );
};

export default SidebarContent;
