import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthorizationStatus } from "../../store/user/selectors";
import { Path, Status } from "../../const";

const PrivateRoute = ({
   component: Component,
   authorizationStatus,
   ...rest
}) => (
   <Route
      {...rest}
      render={(props) =>
         authorizationStatus === Status.AUTHORIZED ? (
            <Component {...props} />
         ) : (
            <Redirect to={Path.LOGIN} />
         )
      }
   />
);

const mapStateToProps = (state) => ({
   authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
