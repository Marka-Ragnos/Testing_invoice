import { ServerURL } from "./const";

export default class api {
   loginUser(userName) {
      return fetch(`${ServerURL.LOGIN}${userName}`).then((data) => data.json());
   }
}
