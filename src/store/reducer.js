import { combineReducers } from "redux";
import { NameSpace } from "../const";
import { reducer as appReducer } from "./app/app";
import { reducer as userReducer } from "./user/user";
import { reducer as buyersReducer } from "./buyers/buyers";
import { reducer as terminalsReducer } from "./terminals/terminals";

const reducer = combineReducers({
   [NameSpace.APP]: appReducer,
   [NameSpace.USER]: userReducer,
   [NameSpace.BUYERS]: buyersReducer,
   [NameSpace.TERMINALS]: terminalsReducer,
});

export default reducer;
