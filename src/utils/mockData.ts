import { Person } from "../pages/calculator";
import { PersonOweDetails } from "./types";

export const data1: Person[] = [
  {
    name: "jaison",
    amount: 200,
  },
  {
    name: "Mark",
    amount: 1200,
  },
  {
    name: "Sanjay",
    amount: 200,
  },
  {
    name: "Jacob",
    amount: 400,
  },
];
export const data2: Person[] = [
  {
    name: "A",
    amount: 300,
  },
  {
    name: "B",
    amount: 150,
  },
  {
    name: "C",
    amount: 50,
  },
  {
    name: "D",
    amount: 400,
  },
  {
    name: "E",
    amount: 100,
  },
];
export const data3: Person[] = [
  {
    name: "A",
    amount: 100,
  },
  {
    name: "B",
    amount: 150,
  },
  {
    name: "C",
    amount: 200,
  },
  {
    name: "D",
    amount: 400,
  },
  {
    name: "E",
    amount: 150,
  },
];

export const result1: PersonOweDetails[] = [
  {
    name: "jaison",
    amount: 200,
    expense: 0,
    expenseStatus: "Less",
    oweWho: "Mark",
    oweHowMuch: 300,
  },

  {
    name: "Sanjay",
    amount: 200,
    expense: 0,
    expenseStatus: "Less",
    oweWho: "Mark",
    oweHowMuch: 300,
  },
  {
    name: "Jacob",
    amount: 400,
    expense: 0,
    expenseStatus: "Less",
    oweWho: "Mark",
    oweHowMuch: 100,
  },
];

export const result2: PersonOweDetails[] = [
  {
    name: "B",
    amount: 150,
    expense: 0,
    expenseStatus: "Less",
    oweWho: "A",
    oweHowMuch: 50,
  },
  {
    name: "C",
    amount: 50,
    expense: 100,
    expenseStatus: "Less",
    oweWho: "A",
    oweHowMuch: 50,
  },
  {
    name: "C",
    amount: 50,
    expense: 0,
    expenseStatus: "Less",
    oweWho: "D",
    oweHowMuch: 100,
  },
  {
    name: "E",
    amount: 100,
    expense: 0,
    expenseStatus: "Less",
    oweWho: "D",
    oweHowMuch: 100,
  },
];

export const result3: PersonOweDetails[] = [
  {
    name: "A",
    amount: 100,
    expense: 0,
    expenseStatus: "Less",
    oweWho: "D",
    oweHowMuch: 100,
  },
  {
    name: "B",
    amount: 150,
    expense: 0,
    expenseStatus: "Less",
    oweWho: "D",
    oweHowMuch: 50,
  },
  {
    name: "E",
    amount: 150,
    expense: 0,
    expenseStatus: "Less",
    oweWho: "D",
    oweHowMuch: 50,
  },
];
