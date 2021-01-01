import React from "react";
import { Nav } from "react-bootstrap";
import './navigation.css'

function Navigation() {
   return (
      <Nav
         defaultActiveKey="/"
         className="flex-column navigation"
         variant="pills"
      >
         <Nav.Link href="/">Главная</Nav.Link>
         <Nav.Link href="/terminals-page">Терминалы</Nav.Link>
         <Nav.Link href="/users-page">Пользователи</Nav.Link>
      </Nav>
   );
}

export default Navigation;
