import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuthorizationStatus } from "../../../store/user/selectors";
import { getAvatar } from "../../../store/user/selectors";
// import { NavigationList } from "../../../const";
// import { Status } from "../../../const";

const SidebarContent = ({
   isOpen,
   avatar,
   authorizationStatus,
}) => {
   // const Navigation = () => {
   //    return NavigationList.map((item) => {
   //       if (authorizationStatus === Status.AUTHORIZED && item.private) {
   //          return (
   //             <NavLink className="navigation__item" to={item.path}>
   //                {item.title}
   //             </NavLink>
   //          );
   //       } else if (!item.private) {
   //          <NavLink className="navigation__item" to={item.path}>
   //             {item.title}
   //          </NavLink>;
   //       }
   //    });
   // };
console.log(avatar);
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
            {/* {Navigation} */}
            <NavLink className="navigation__item" to="/">
               Главная
            </NavLink>
            <NavLink className="navigation__item" to="/sign-in-page">
               Залогиниться
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

const mapStateToProps = (state) => ({
   authorizationStatus: getAuthorizationStatus(state),
   avatar: getAvatar(state),
});

export default connect(mapStateToProps)(SidebarContent);
