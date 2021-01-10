import { extend } from "../../utils";

const initialState = {
   menuIsOpen: false,
   // avatar: "/images/avatar-primer.jpg",
};

export const ActionType = {
   SET_MENU_OPEN: `SET_MENU_OPEN`,
   // SET_AVATAR: `SET_AVATAR`,
};

export const ActionCreator = {
   setMenuOpen: (menuIsOpen) => ({
      type: ActionType.SET_MENU_OPEN,
      payload: menuIsOpen,
   }),
   // setAvatar: (avatar) => ({
   //    type: ActionType.SET_MENU_OPEN,
   //    payload: avatar,
   // }),
};

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionType.SET_MENU_OPEN:
         return extend(state, { menuIsOpen: action.payload });
      // case ActionType.SET_AVATAR:
      //    return extend(state, { avatar: action.payload });
      default:
         return state;
   }
};
