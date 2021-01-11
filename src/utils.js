import { useState, useMemo } from "react";

const getTotal = (firstТumber, secondNumber) => {
   return Math.floor(firstТumber * secondNumber);
};

export const addTotal = (arr) =>
   arr.map((item) => {
      const total = getTotal(item.check, item.purchases);
      item.total = total;
      return item;
   });

export const getRandomInRange = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const uniqueID = () => {
   return Math.floor((Math.random() * Date.now()) / 100000000);
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

export const extend = (target, update) => Object.assign({}, target, update);

export const search = (items, term) => {
   if (term.length === 0) {
      return items;
   }
   return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
   });
};

export const getClassNamesFor = (name, sortConfig) => {
   if (!sortConfig) {
      return;
   }
   return sortConfig.key === name ? sortConfig.direction : undefined;
};

export const removeItem = (arr, id) => {
   const idx = arr.findIndex((item) => item.id === id);
   const newArr = [...arr.slice(0, idx), ...arr.slice(idx + 1)];

   return newArr;
};
