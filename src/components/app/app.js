import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Path } from "../../const";
import Sidebar from "../sidebar/sidebar";
import HomePage from "../../pages/home-page/home-page";
import BuyersPage from "../../pages/buyers-page/buyers-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import AppWrapper from "./app-wrapper";
import SignInPage from "../../pages/sign-in-page/sign-in-page";
import IndividualBuyerPage from "../../pages/individual-buyer-page/individual-buyer-page";
import TerminalsPage from "../../pages/terminals-page/terminals-page";
import PrivateRoute from "../hoc/private-route";
import PrivateRouteLogged from "../hoc/private-route-logged";

const App = () => {
   return (
      <div className="app">
         <BrowserRouter>
            <AppWrapper renderProp={Sidebar}>
               <Switch>
                  <Route path={Path.MAIN} exact component={HomePage} />
                  <PrivateRouteLogged
                     path={Path.LOGIN}
                     exact
                     component={SignInPage}
                  />
                  <PrivateRoute
                     path={Path.TERMINALS}
                     exact
                     component={TerminalsPage}
                  />
                  <PrivateRoute
                     path={Path.BUYERS}
                     exact
                     component={BuyersPage}
                  />
                  <PrivateRoute
                     path={`${Path.BUYERS_INDIVIDUAL}:buyersId`}
                     exact
                     component={({
                        match: {
                           params: { buyersId },
                        },
                     }) => {
                        return <IndividualBuyerPage id={Number(buyersId)} />;
                     }}
                  />
                  <Route component={NotFoundPage} />
               </Switch>
            </AppWrapper>
         </BrowserRouter>
      </div>
   );
};

export default App;
