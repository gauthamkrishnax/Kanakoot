import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import CalculateButton from "./CalculateButton";
import PersonListElement from "./PersonListElement";
import { ReportInterface } from "../utils/types";

const IndividualExpenseDetails = ({
  setReport,
}: {
  setReport: React.Dispatch<React.SetStateAction<ReportInterface>>;
}) => {
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
      <CalculateButton setReport={setReport} />
    </ul>
  );
};

export default IndividualExpenseDetails;
