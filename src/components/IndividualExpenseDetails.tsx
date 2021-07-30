import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import CalculateButton from "./CalculateButton";
import PersonListElement from "./PersonListElement";
import { ReportInterface } from "../utils/types";

const IndividualExpenseDetails = () => {
  const { data } = useContext(calculatorContext);
  return (
    <ol>
      {data.stateData ? (
        data.stateData.map((person, i) => (
          <PersonListElement
            name={person.name}
            amount={person.amount}
            key={i}
          />
        ))
      ) : (
        <span>No data Added ! </span>
      )}
      <CalculateButton />
    </ol>
  );
};

export default IndividualExpenseDetails;
