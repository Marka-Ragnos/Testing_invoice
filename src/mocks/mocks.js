import { getRandomInRange, addTotal } from "../utils";

const buyersData = [
   {
      id: 1,
      name: `Anakin Skywalker`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 2,
      name: `Anakin Skywalker`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 3,
      name: `Han Solo`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 4,
      name: `Han Solo`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 5,
      name: `Kylo Ren`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 6,
      name: `Kylo Ren`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 7,
      name: `Padmé Amidala`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 8,
      name: `Sifo-Dyas`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 9,
      name: `Obi-Wan Kenobi`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 10,
      name: `Rey`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 11,
      name: `Count Dooku`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 12,
      name: `Sheev Palpatine`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 13,
      name: `Boba Fett`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 14,
      name: `Jango Fett`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 15,
      name: `Lando Calrissian`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 16,
      name: `General Grievous`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: 17,
      name: `Qui-Gon Jinn`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
];

const buyers = addTotal(buyersData);

export default buyers;
