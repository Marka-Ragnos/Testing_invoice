import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { NavigationList, Status } from "../../const";
import { getAuthorizationStatus } from "../../store/user/selectors";
import { ActionCreator as UserActionCreator } from "../../store/user/user";


const Navigation = ({ authorizationStatus, setAuthorizationStatus, setGitHubData }) => {

   const actionExit = (authStatus, gitHubData) => {
      setAuthorizationStatus(authStatus);
      setGitHubData(gitHubData);
   }

   const currentNavigation = Object.values(NavigationList).filter(
   (item) => {
      return item.title === 'Главная' || item.private === (authorizationStatus === Status.AUTHORIZED);
   }
);

   return currentNavigation.map((item, index) => (
      item.title === "Выход" ? 
      <NavLink
            key={item.title + index}
            className="navigation__item"
            to={item.path}
            onClick={() => { actionExit(Status.UNAUTHORIZED, {}) }}
      >
         {item.title}
      </NavLink> :
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

const mapDispatchToProps = (dispatch) => ({
   setAuthorizationStatus: (authorizationStatus) => {
      dispatch(UserActionCreator.setAuthorizationStatus(authorizationStatus));
   },
      setGitHubData: (data) => {
      dispatch(UserActionCreator.setGitHubData(data));
   },
});


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
