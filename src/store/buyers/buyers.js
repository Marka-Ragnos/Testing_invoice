import { extend } from "../../utils";
import buyers from "../../mocks/mocks";

const initialState = {
   buyers: buyers,
};

export const ActionType = {
   SET_BUYERS: `SET_BUYERS`,
};

export const ActionCreator = {
   setBuyers: (buyers) => ({ type: ActionType.SET_BUYERS, payload: buyers }),
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_BUYERS:
         return extend(state, { buyers: action.payload });
      default:
         return state;
   }
};
