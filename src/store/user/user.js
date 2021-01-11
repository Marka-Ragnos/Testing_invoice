import { Status } from "../../const";
import { extend } from "../../utils";
import { convertUserFromServerFormat } from "../../adapters";

const initialState = {
   authorizationStatus: Status.UNAUTHORIZED,
   gitHubData: {},
};

export const ActionType = {
   SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
   SET_GIT_HUB_DATA: `SET_GIT_HUB_DATA`,
};

export const ActionCreator = {
   setAuthorizationStatus: (authorizationStatus) => ({
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload: authorizationStatus,
   }),
   setGitHubData: (data) => ({
      type: ActionType.SET_GIT_HUB_DATA,
      payload: convertUserFromServerFormat(data),
   }),
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_AUTHORIZATION_STATUS:
         return extend(state, { authorizationStatus: action.payload });
      case ActionType.SET_GIT_HUB_DATA:
         return extend(state, { gitHubData: action.payload });
      default:
         return state;
   }
};
