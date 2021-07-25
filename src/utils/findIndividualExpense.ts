import { person, personExpense } from "./types";
import findExpense from "./findExpense";

export default function findIndividualExpense(data: person[]): personExpense[] {
  let report: personExpense[] = [],
    expense: number;

  data.forEach((e, i) => {
    expense = e.amountSpent - findExpense(data).expensePerPerson;
    report[i] = {
      ...e,
      expense: expense,
      expenseStatus: `${
        expense === 0 ? "Equal" : expense > 0 ? "More" : "Less"
      }`,
    };
  });

  return report;
}
