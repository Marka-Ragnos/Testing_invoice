import { NameSpace } from "../../const";

export const getAuthorizationStatus = (state) =>
   state[NameSpace.USER].authorizationStatus;

export const getAvatar = (state) =>
   state[NameSpace.USER].gitHubData.avatar
      ? state[NameSpace.USER].gitHubData.avatar
		: `images/avatar-primer.jpg`;
		
export const getUserName = (state) =>
   state[NameSpace.USER].gitHubData.name
      ? state[NameSpace.USER].gitHubData.name
      : `User Name`;
