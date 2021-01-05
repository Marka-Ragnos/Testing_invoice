import { createSelector } from "reselect";
import { NameSpace } from "../../const";
import { addTotal } from "../../utils";

export const getData = (state) => state[NameSpace.APP].buyers;

export const getBuyersWithTotal = createSelector(getData, (buyers) =>
   addTotal(buyers)
);

export const getBuyerWithId = (state, buyerId) =>
   getBuyersWithTotal(state).find(({ buyer }) => buyer.id === buyerId);
