import { combineReducers } from "redux";
import { NameSpace } from "../const";
import { reducer as appReducer } from "./app/app";
import { reducer as userReducer } from "./user/user";

const reducer = combineReducers({
   [NameSpace.APP]: appReducer,
   [NameSpace.USER]: userReducer,
});

export default reducer;
