import { extend } from "../../utils";

const initialState = {
   terminals: [],
};

export const ActionType = {
   SET_TERMINALS: `SET_TERMINALS`,
};

export const ActionCreator = {
   setTerminals: (terminals) => ({
      type: ActionType.SET_TERMINALS,
      payload: terminals,
   }),
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_TERMINALS:
         return extend(state, { terminals: [action.payload] });
      default:
         return state;
   }
};
