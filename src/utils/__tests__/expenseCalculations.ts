import findExpense from "../findExpense";
import findIndividualExpense from "../findIndividualExpense";
import { Person } from "../../pages/calculator";
import { data1 } from "../mockData";

describe("Expense Calculations", () => {
  test("Expense per person", () => {
    expect(findExpense(data1).totalExpense).toBe(
      findExpense(data1).expensePerPerson * data1.length
    );
  });

  test("Length of output array", () => {
    expect(findIndividualExpense(data1).individualExpenseReport.length).toBe(
      data1.length
    );
  });

  test("find Right amount to recieve", () => {
    var sum = 0;
    findIndividualExpense(data1).individualExpenseReport.map((current) => {
      sum + current.expense;
    });
    expect(sum).toBe(0);
  });
});
