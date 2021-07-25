import findIndividualExpense from "./findIndividualExpense";
import { person, personOweDetails } from "./types";

export default function findWhoOwes(data: person[]): personOweDetails[] {
  let report: personOweDetails[] = [];
  const expenseData = findIndividualExpense(data);

  let loaneeList = expenseData.filter((e) => e.expense < 0);
  let loanerList = expenseData.filter((e) => e.expense > 0);

  loanerList.forEach((loaner) => {
    loaneeList.forEach((loanee) => {
      if (loaner.expense === 0) {
        return;
      } else if (loanee.expense === 0) {
        return;
      } else if (Math.abs(loanee.expense) <= loaner.expense) {
        report.push({
          ...loanee,
          oweWho: loaner.name,
          oweHowMuch: Math.abs(loanee.expense),
        });
        loaner.expense -= loanee.expense;
        loanee.expense = 0;
      } else {
        report.push({
          ...loanee,
          oweWho: loaner.name,
          oweHowMuch: Math.abs(loaner.expense),
        });
        loanee.expense -= loaner.expense;
        loaner.expense = 0;
      }
    });
  });
  return report;
}
