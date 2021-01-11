import { createSelector } from "reselect";
import { NameSpace } from "../../const";

export const getBuyers = (state) => state[NameSpace.BUYERS].buyers;

export const getIndividualBuyer = (id) =>
   createSelector(getBuyers, (buyers) => {
      return buyers.find((buyer) => Number(buyer.id) === id);
   });
