import React from "react";
import Sidebar from "../sidebar/sidebar";
import HomePage from "../../pages/home-page/home-page";
import Buyers from "../../pages/buyers-page/buyers-page";
import NotFoundPage from "../../pages/not-found-page/not-found-page";
import AppWrapper from "./app-wrapper";
import SignInPage from "../../pages/sign-in-page/sign-in-page";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
   return (
      <div className="app">
         <BrowserRouter>
            <AppWrapper renderProp={Sidebar}>
               <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/sign-in-page" exact component={SignInPage} />
                  <Route path="/buyers-page" exact component={Buyers} />
                  <Route component={NotFoundPage} />
               </Switch>
            </AppWrapper>
         </BrowserRouter>
      </div>
   );
};

export default App;
