import { extend } from "../../utils";

const initialState = {
   menuIsOpen: false,
};

export const ActionType = {
   SET_MENU_OPEN: `SET_MENU_OPEN`,
};

export const ActionCreator = {
   setMenuOpen: (menuIsOpen) => ({
      type: ActionType.SET_MENU_OPEN,
      payload: menuIsOpen,
   }),
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_MENU_OPEN:
         return extend(state, { menuIsOpen: action.payload });
      default:
         return state;
   }
};
