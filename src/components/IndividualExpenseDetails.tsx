import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import CalculateButton from "./CalculateButton";
import PersonListElement from "./PersonListElement";
import { ReportInterface } from "../utils/types";

const IndividualExpenseDetails = () => {
  const { data } = useContext(calculatorContext);
  return (
    <div>
      {data.stateData ? (
        <>
          <ol>
            {data.stateData.map((person, i) => (
              <PersonListElement
                name={person.name}
                amount={person.amount}
                key={i}
              />
            ))}
          </ol>
          <CalculateButton />
        </>
      ) : (
        <span>No data Added ! </span>
      )}
    </div>
  );
};

export default IndividualExpenseDetails;
