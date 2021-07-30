import { Person } from "../pages/calculator";
import { PersonExpense } from "./types";
import findExpense from "./findExpense";

export default function findIndividualExpense(data: Person[]): {
  totalExpense: number;
  expensePerPerson: number;
  individualExpenseReport: PersonExpense[];
} {
  const expenseReport: {
    totalExpense: number;
    expensePerPerson: number;
  } = findExpense(data);

  let report: PersonExpense[] = [],
    expense: number;

  data.forEach((e, i) => {
    expense = e.amount - expenseReport.expensePerPerson;
    report[i] = {
      ...e,
      expense: expense,
      expenseStatus: `${
        expense === 0 ? "Equal" : expense > 0 ? "More" : "Less"
      }`,
    };
  });
  return { ...expenseReport, individualExpenseReport: report };
}
