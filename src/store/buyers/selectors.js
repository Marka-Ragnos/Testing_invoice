import { createSelector } from "reselect";
import { NameSpace } from "../../const";
import { addTotal } from "../../utils";

export const getData = (state) => state[NameSpace.BUYERS].buyers;

export const getBuyersWithTotal = createSelector(getData, (buyers) =>
   addTotal(buyers)
);

export const getIndividualBuyer = (id) =>
   createSelector(getData, (buyers) => {
      return buyers.find((buyer) => Number(buyer.id) === id);
   });
