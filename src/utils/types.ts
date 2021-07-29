import { Person } from "../pages/calculator";

export interface PersonExpense extends Person {
  expense: number;
  expenseStatus: "Equal" | "More" | "Less";
}

export interface PersonOweDetails extends PersonExpense {
  oweWho: string;
  oweHowMuch: number;
}
export interface ReportInterface {
  totalExpense: number;
  expensePerPerson: number;
  individualExpenseReport: PersonExpense[];
  whoOwesReport: PersonOweDetails[];
}
