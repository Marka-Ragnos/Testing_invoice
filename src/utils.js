import { useState, useMemo } from "react";

export const getRandomInRange = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const uniqueID = () => {
   return Math.floor((Math.random() * Date.now()) / 100000000);
};

export const getTotal = (firstТumber, secondNumber) => {
   return Math.floor(firstТumber * secondNumber);
};

export const useSorttableData = (items, config = null) => {
   const [sortConfig, setSortConfig] = useState(config);

   const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
         sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
               return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
               return sortConfig.direction === "ascending" ? 1 : -1;
            }
            return 0;
         });
      }
      return sortableItems;
   }, [items, sortConfig]);

   const requestSort = (key) => {
      let direction = "ascending";
      if (
         sortConfig &&
         sortConfig.key === key &&
         sortConfig.direction === "ascending"
      ) {
         direction = "descending";
      }
      setSortConfig({ key, direction });
   };

   return { items: sortedItems, requestSort, sortConfig };
};

export const addTotal = (arr) =>
   arr.map((item, index) => {
      const total = getTotal(item.check, item.purchases);
      item.total = total;
      return item;
   });

export const extend = (target, update) => Object.assign({}, target, update);

