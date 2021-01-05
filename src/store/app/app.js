import { extend } from "../../utils";
import archiveBuyers from '../../mocks/mocks';

const initialState = {
   buyers: archiveBuyers,
   individualBuyer: {},
   terminals: [],
   individualTerminal: {},
   menuIsOpen: false,
};

export const ActionType = {
   SET_MENU_OPEN: `SET_MENU_OPEN`,
   SET_BUYERS: `SET_BUYERS`,
   SET_INDIVIDUAL_BUYER: `SET_INDIVIDUAL_BUYER`,
   SET_TERMINALS: `SET_TERMINALS`,
   SET_INDIVIDUAL_TERMINAL: `SET_INDIVIDUAL_TERMINAL`,
};

export const ActionCreator = {
   setBuyers: (buyers) => ({ type: ActionType.SET_BUYERS, payload: buyers }),
   setIndividualBuyer: (individualBuyer) => ({
      type: ActionType.SET_INDIVIDUAL_BUYER,
      payload: individualBuyer,
   }),
   setTerminals: (terminals) => ({
      type: ActionType.SET_TERMINALS,
      payload: terminals,
   }),
   setIndividualTerminal: (individualTerminal) => ({
      type: ActionType.SET_INDIVIDUAL_TERMINAL,
      payload: individualTerminal,
   }),
   setMenuOpen: (menuIsOpen) => ({
      type: ActionType.SET_MENU_OPEN,
      payload: menuIsOpen,
   }),
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_MENU_OPEN:
         return extend(state, { menuIsOpen: action.payload });
      case ActionType.SET_BUYERS:
         return extend(state, { buyers: action.payload });
      case ActionType.SET_INDIVIDUAL_BUYER:
         return extend(state, { individualBuyer: action.payload });
      case ActionType.SET_TERMINALS:
         return extend(state, { terminals: action.payload });
      case ActionType.SET_INDIVIDUAL_TERMINAL:
         return extend(state, { individualTerminal: action.payload });
      default:
         return state;
   }
};
