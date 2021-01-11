import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { NavigationList, Status } from "../../const";
import { getAuthorizationStatus } from "../../store/user/selectors";

const Navigation = ({ authorizationStatus }) => {
   const currentNavigation = Object.values(NavigationList).filter(
      (item) => !(item.private && authorizationStatus === Status.UNAUTHORIZED)
   );

   return currentNavigation.map((item, index) => (
      <NavLink
         key={item.title + index}
         className="navigation__item"
         to={item.path}
      >
         {item.title}
      </NavLink>
   ));
};

const mapStateToProps = (state) => ({
   authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(Navigation);
