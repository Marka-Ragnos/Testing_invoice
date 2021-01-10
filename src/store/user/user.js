import { Status } from "../../const";
import { extend } from "../../utils";

const initialState = {
   authorizationStatus: Status.AUTHORIZED,
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
   setGitHubData: (data) => ({ type: ActionType.SET_GIT_HUB_DATA, payload: data }),
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_AUTHORIZATION_STATUS:
         return extend(state, { authorizationStatus: action.payload });
      case ActionType.SET_GIT_HUB_DATA:
         return extend(state, { email: action.payload });
      default:
         return state;
   }
};
