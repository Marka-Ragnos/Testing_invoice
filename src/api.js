import { ServerURL } from "./const";

export default class API {
   loginUser(userName) {
      return fetch(`${ServerURL.LOGIN}${userName}`).then((data) => data.json());
   }
}
