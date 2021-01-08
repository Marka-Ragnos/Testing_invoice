import { getRandomInRange, uniqueID } from "../utils";

const buyers = [
   {
      id: uniqueID(),
      name: `Anakin Skywalker`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Anakin Skywalker`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Han Solo`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Han Solo`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Kylo Ren`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Kylo Ren`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Padmé Amidala`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Sifo-Dyas`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Obi-Wan Kenobi`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Rey`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Count Dooku`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Sheev Palpatine`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Boba Fett`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Jango Fett`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
   {
      id: uniqueID(),
      name: `Lando Calrissian`,
      check: getRandomInRange(100, 1000),
      purchases: getRandomInRange(1, 20),
   },
];

export default buyers;
