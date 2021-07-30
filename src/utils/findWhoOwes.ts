import findIndividualExpense from "./findIndividualExpense";
import { Person } from "../pages/calculator";
import { PersonExpense, PersonOweDetails, ReportInterface } from "./types";

export default function findWhoOwes(data: Person[]): ReportInterface {
  const expenseData = findIndividualExpense(data);

  let report: PersonOweDetails[] = [],
    oweDetails: { oweWho: string; oweHowMuch: number };

  let loaneeList: PersonExpense[] = [];
  let loanerList: PersonExpense[] = [];
  let temp: PersonExpense = {
    expense: 0,
    expenseStatus: "Equal",
    name: "",
    amount: 0,
  };

  expenseData.individualExpenseReport.forEach((e) => {
    if (e.expenseStatus === "Less") {
      temp = Object.assign({}, e);
      loaneeList.push(temp);
    } else if (e.expenseStatus === "More") {
      temp = Object.assign({}, e);
      loanerList.push(temp);
    }
  });

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
  // if (loaneeList.length != 0) {
  //   throw new Error("Find Who Owes Who Algorithm not working Properly !");
  // }

  return { ...expenseData, whoOwesReport: report };
}
