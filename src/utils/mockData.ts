import { person, personOweDetails } from "./types";

export const data1: person[] = [
  {
    name: "jaison",
    amountSpent: 200,
  },
  {
    name: "Mark",
    amountSpent: 1200,
  },
  {
    name: "Sanjay",
    amountSpent: 200,
  },
  {
    name: "Jacob",
    amountSpent: 400,
  },
];
export const data2: person[] = [
  {
    name: "A",
    amountSpent: 300,
  },
  {
    name: "B",
    amountSpent: 150,
  },
  {
    name: "C",
    amountSpent: 50,
  },
  {
    name: "D",
    amountSpent: 400,
  },
  {
    name: "E",
    amountSpent: 100,
  },
];

export const result1: personOweDetails[] = [
  {
    name: "jaison",
    amountSpent: 200,
    expense: -300,
    expenseStatus: "Less",
    oweWho: "Mark",
    oweHowMuch: 300,
  },

  {
    name: "Sanjay",
    amountSpent: 200,
    expense: -300,
    expenseStatus: "Less",
    oweWho: "Mark",
    oweHowMuch: 300,
  },
  {
    name: "Jacob",
    amountSpent: 400,
    expense: -100,
    expenseStatus: "Less",
    oweWho: "Mark",
    oweHowMuch: 100,
  },
];

export const result2: personOweDetails[] = [
  {
    name: "B",
    amountSpent: 150,
    expense: -50,
    expenseStatus: "Less",
    oweWho: "A",
    oweHowMuch: 50,
  },
  {
    name: "C",
    amountSpent: 50,
    expense: 150,
    expenseStatus: "Less",
    oweWho: "A",
    oweHowMuch: 50,
  },
  {
    name: "D",
    amountSpent: 400,
  },
  {
    name: "E",
    amountSpent: 100,
  },
];
