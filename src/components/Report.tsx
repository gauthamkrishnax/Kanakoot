import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import CalculateButton from "./CalculateButton";
import PieGraph from "./PieGraph";

const Report = () => {
  const { data, report } = useContext(calculatorContext);
  React.useEffect(() => {
    report.setStateFunction(null);
  }, [`${data.stateData}`]);
  if (report.stateData)
    return (
      <div>
        <h4>Kanakoot</h4>
        <h3>
          TotalExpense: {Math.round(report.stateData.totalExpense * 100) / 100}
        </h3>
        <h5>
          Expense Per Person:{" "}
          {Math.round(report.stateData.expensePerPerson * 100) / 100}
        </h5>
        <div>
          <PieGraph report={report} />
        </div>
        <h4>Individual Expenses</h4>
        <ol>
          {report.stateData.individualExpenseReport.map((e, i) => (
            <li key={i}>
              <span>{e.name} </span>
              <span>{Math.round(e.amount * 100) / 100} </span>
              <span>
                spent {Math.round(Math.abs(e.expense) * 100) / 100}{" "}
                {e.expenseStatus}
              </span>
            </li>
          ))}
        </ol>
        <div>
          <h4>Directions to settle :</h4>
          <ul>
            {report.stateData.whoOwesReport.map((e, i) => (
              <li key={i}>
                {e.name} should pay {e.oweWho}{" "}
                {Math.round(e.oweHowMuch * 100) / 100}/-
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  else
    return (
      <div>
        <CalculateButton />
      </div>
    );
};

export default Report;
