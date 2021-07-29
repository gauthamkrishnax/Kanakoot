import { Person } from "../pages/calculator";

export default function findExpense(data: Person[]): {
  totalExpense: number;
  expensePerPerson: number;
} {
  let total = 0;
  data.forEach((e) => {
    total += e.amount;
  });
  return { totalExpense: total, expensePerPerson: total / data.length };
}
