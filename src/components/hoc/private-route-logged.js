import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Path, Status } from "../../const";
import { getAuthorizationStatus } from "../../store/user/selectors";

const PrivateRouteLogged = ({
   component: Component,
   authorizationStatus,
   ...props
}) => (
   <Route
      {...props}
      render={(props) =>
         authorizationStatus === Status.UNAUTHORIZED ? (
            <Component {...props} />
         ) : (
            <Redirect to={Path.MAIN} />
         )
      }
   />
);

const mapStateToProps = (state) => ({
   authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRouteLogged);
