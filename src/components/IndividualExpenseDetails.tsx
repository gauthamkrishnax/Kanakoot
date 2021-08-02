import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import CalculateButton from "./CalculateButton";
import PersonListElement from "./PersonListElement";
import { ReportInterface } from "../utils/types";

import * as style from "../styles/components/ExpenseDetails.module.scss";

const IndividualExpenseDetails = () => {
  const { data } = useContext(calculatorContext);
  return (
    <div className={`expenseDetails ${style.container}`}>
      {data.stateData ? (
        <>
          <table className={style.table}>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
            {data.stateData.map((person, i) => (
              <PersonListElement
                name={person.name}
                no={i}
                amount={person.amount}
                key={i}
              />
            ))}
          </table>
          <CalculateButton />
        </>
      ) : (
        <span>No data added ! </span>
      )}
    </div>
  );
};

export default IndividualExpenseDetails;
