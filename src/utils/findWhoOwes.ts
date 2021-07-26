import findIndividualExpense from "./findIndividualExpense";
import { person, personExpense, personOweDetails } from "./types";

export default function findWhoOwes(data: person[]): {
  totalExpense: number;
  expensePerPerson: number;
  individualExpenseReport: personExpense[];
  whoOwesReport: personOweDetails[];
} {
  const expenseData = findIndividualExpense(data);

  let report: personOweDetails[] = [],
    oweDetails: { oweWho: string; oweHowMuch: number };

  let loaneeList = expenseData.individualExpenseReport.filter(
    (e) => e.expense < 0
  );
  let loanerList = expenseData.individualExpenseReport.filter(
    (e) => e.expense > 0
  );

  loanerList.forEach((loaner) => {
    loaneeList.forEach((loanee) => {
      if (loanee.expense != 0) {
        if (loaner.expense != 0) {
          if (Math.abs(loanee.expense) <= loaner.expense) {
            oweDetails = {
              oweWho: loaner.name,
              oweHowMuch: Math.abs(loanee.expense),
            };
            loaner.expense = loaner.expense - Math.abs(loanee.expense);
            loanee.expense = 0;
          } else {
            oweDetails = {
              oweWho: loaner.name,
              oweHowMuch: Math.abs(loaner.expense),
            };
            loanee.expense = Math.abs(loanee.expense) - loaner.expense;
            loaner.expense = 0;
          }
          report.push({ ...loanee, ...oweDetails });
        }
      }
      if (loanee.expense === 0) {
        loaneeList = loaneeList.filter((e) => e.name != loanee.name);
      }
    });
  });
  if (loaneeList.length != 0) {
    throw new Error("Find Who Owes Who Algorithm not working Properly !");
  }
  return { ...expenseData, whoOwesReport: report };
}
