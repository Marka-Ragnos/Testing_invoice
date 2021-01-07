import { extend } from "../../utils";
import buyers from "../../mocks/mocks";

const initialState = {
   buyers: buyers,
};

export const ActionType = {
   SET_BUYERS: `SET_BUYERS`,
   // SET_INDIVIDUAL_BUYER: `SET_INDIVIDUAL_BUYER`,
};

export const ActionCreator = {
   setBuyers: (buyers) => ({ type: ActionType.SET_BUYERS, payload: buyers }),
   // setIndividualBuyer: (individualBuyer) => ({
   //    type: ActionType.SET_INDIVIDUAL_BUYER,
   //    payload: individualBuyer,
   // }),
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_BUYERS:
         return extend(state, { buyers: action.payload });
      // case ActionType.SET_INDIVIDUAL_BUYER:
      //    return extend(state, { individualBuyer: action.payload });
      default:
         return state;
   }
};
