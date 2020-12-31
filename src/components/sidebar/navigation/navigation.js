import React from "react";
import { Nav } from "react-bootstrap";

function Navigation() {
   return (
      <Nav
         defaultActiveKey="/home-page"
         className="flex-column"
         variant="pills"
      >
         <Nav.Link href="/home-page">Главная</Nav.Link>
         <Nav.Link href="/terminals-page">Терминалы</Nav.Link>
         <Nav.Link href="/users-page">Пользователи</Nav.Link>
      </Nav>
   );
}

export default Navigation;
