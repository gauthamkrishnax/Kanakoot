import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import PersonListElement from "./PersonListElement";

const IndividualExpenseDetails = () => {
  const { stateData } = useContext(calculatorContext);
  return (
    <ul>
      {stateData ? (
        stateData.map((person, i) => (
          <PersonListElement
            name={person.name}
            amount={person.amount}
            key={i}
          />
        ))
      ) : (
        <span>No data Added !</span>
      )}
    </ul>
  );
};

export default IndividualExpenseDetails;
