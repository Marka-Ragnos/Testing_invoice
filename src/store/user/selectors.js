import { NameSpace } from "../../const";

export const getAuthorizationStatus = (state) =>
	state[NameSpace.USER].authorizationStatus;
	
export const getAvatar = (state) => state[NameSpace.USER].gitHubData.avatar;
