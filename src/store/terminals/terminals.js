import { extend, removeItem } from "../../utils";

const initialState = {
   terminals: [],
};

export const ActionType = {
   SET_TERMINAL: `SET_TERMINAL`,
   DELETE_TERMINAL: `DELETE_TERMINAL`,
};

export const ActionCreator = {
   setTerminal: (terminals) => ({
      type: ActionType.SET_TERMINAL,
      payload: terminals,
   }),
   deleteTerminal: (terminalId) => ({
      type: ActionType.DELETE_TERMINAL,
      payload: terminalId,
   }),
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_TERMINAL:
         return extend(state, { terminals: action.payload });
      case ActionType.DELETE_TERMINAL:
         return extend(state, {
            terminals: removeItem(state.terminals, action.payload),
         });
      default:
         return state;
   }
};
