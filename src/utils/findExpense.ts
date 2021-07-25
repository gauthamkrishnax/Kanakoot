import { person } from "./types";

export default function findExpense(data: person[]): {
  totalExpense: number;
  expensePerPerson: number;
} {
  let total = 0;
  data.forEach((e) => {
    total += e.amountSpent;
  });
  return { totalExpense: total, expensePerPerson: total / data.length };
}
