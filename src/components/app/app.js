import React from "react";
import Sidebar from "../sidebar/sidebar";
import HomePage from "../../pages/home-page/home-page";
import BuyersPage from "../../pages/buyers-page/buyers-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import AppWrapper from "./app-wrapper";
import SignInPage from "../../pages/sign-in-page/sign-in-page";
import IndividualBuyerPage from "../../pages/individual-buyer-page/individual-buyer-page";
import TerminalsPage from "../../pages/terminals-page/terminals-page";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
   return (
      <div className="app">
         <BrowserRouter>
            <AppWrapper renderProp={Sidebar}>
               <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/sign-in-page" exact component={SignInPage} />
                  <Route path="/terminals-page" exact component={TerminalsPage} />
                  <Route path="/buyers-page" exact component={BuyersPage} />
                  <Route
                     path="/buyers/1"
                     exact
                     component={IndividualBuyerPage}
                  />
                  <Route component={NotFoundPage} />
               </Switch>
            </AppWrapper>
         </BrowserRouter>
      </div>
   );
};

export default App;
