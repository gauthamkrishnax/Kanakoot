import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import CalculateButton from "./CalculateButton";
import PersonListElement from "./PersonListElement";
import { ReportInterface } from "../utils/types";
import deletePersonFromContextData from "../utils/DeletePersonFromContextData";

import * as style from "../styles/components/ExpenseDetails.module.scss";

const IndividualExpenseDetails = () => {
  const { data } = useContext(calculatorContext);
  let deletePerson = (nameid) => {
    deletePersonFromContextData(data, nameid);
    console.log(nameid);
  };

  return (
    <div className={`expenseDetails ${style.container}`}>
      {data.stateData ? (
        <>
          <table className={style.table}>
            <tbody>
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
                  deletePerson={deletePerson}
                />
              ))}
            </tbody>
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
