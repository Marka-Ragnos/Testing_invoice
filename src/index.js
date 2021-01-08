import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import { Status } from "./const";
import reducer from "./store/reducer";
// import {
//    ActionCreator as UserActionCreator,
//    Operation as UserOperation,
// } from "./store/user/user";
import App from "./components/app/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


const store = createStore(reducer);

// store.dispatch(UserOperation.checkAuthorizationStatus());

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);

reportWebVitals();
