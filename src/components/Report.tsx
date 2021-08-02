import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import CalculateButton from "./CalculateButton";
import PieGraph from "./PieGraph";
import Logo from "../assets/LogoMark.inline.svg";

import * as style from "../styles/components/Report.module.scss";
import { table } from "../styles/components/ExpenseDetails.module.scss";
const Report = () => {
  const { data, report } = useContext(calculatorContext);
  React.useEffect(() => {
    report.setStateFunction(null);
  }, [`${data.stateData}`]);
  if (report.stateData)
    return (
      <div className={`report ${style.container}`}>
        <div className={style.logo}>
          <Logo />
          <h4>Kanakoot</h4>
        </div>
        <span className={style.heading}>
          <h3>
            TotalExpense:{" "}
            {Math.round(report.stateData.totalExpense * 100) / 100}
          </h3>
          <h5>
            Expense Per Person:{" "}
            {Math.round(report.stateData.expensePerPerson * 100) / 100}
          </h5>
        </span>
        <div className={style.graph}>
          <PieGraph report={report} />
        </div>
        <h4>Directions to settle :</h4>
        <div className={style.directions}>
          <ul>
            {report.stateData.whoOwesReport.map((e, i) => (
              <li key={i}>
                <strong>{e.name}</strong> should pay{" "}
                <strong>{e.oweWho} </strong>
                <strong>{Math.round(e.oweHowMuch * 100) / 100}/-</strong>
              </li>
            ))}
          </ul>
        </div>
        <h4>Individual Expenses :</h4>
        <table className={table}>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
          {report.stateData.individualExpenseReport.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}.</td>
              <td>{e.name} </td>
              <td>{Math.round(e.amount * 100) / 100} </td>
              <td>
                spent {Math.round(Math.abs(e.expense) * 100) / 100}{" "}
                {e.expenseStatus}
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  else
    return (
      <div className={style.calculateButton}>
        <CalculateButton />
      </div>
    );
};

export default Report;
