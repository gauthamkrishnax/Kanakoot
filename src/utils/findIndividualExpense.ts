import { person, personExpense } from "./types";
import findExpense from "./findExpense";

export default function findIndividualExpense(data: person[]): {
  totalExpense: number;
  expensePerPerson: number;
  individualExpenseReport: personExpense[];
} {
  const expenseReport: {
    totalExpense: number;
    expensePerPerson: number;
  } = findExpense(data);

  let report: personExpense[] = [],
    expense: number;

  data.forEach((e, i) => {
    expense = e.amountSpent - expenseReport.expensePerPerson;
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
