import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
   return (
      <div className="not-found-page">
         <div className="not-found-page__wrap">
            <div className="not-found-page__logo">
               <h1>404</h1>
               <p> Sorry - File not Found!</p>
               <div className="not-found-page__sub">
                  <p>
                     <NavLink to="/">Вернуться на главную</NavLink>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NotFoundPage;
