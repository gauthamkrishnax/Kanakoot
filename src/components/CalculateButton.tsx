import * as React from "react";
import { Person } from "../pages/calculator";
import { calculatorContext } from "../pages/calculator";
import { useContext } from "react";
import { ReportInterface } from "../utils/types";
import { createReport } from "../utils/createReport";

const CalculateButton = ({
  setReport,
}: {
  setReport: React.Dispatch<React.SetStateAction<ReportInterface>>;
}) => {
  const handleMouseEvent = () => {
    setReport(createReport(data.stateData));
  };
  const data = useContext(calculatorContext);
  if (data.stateData == null || data.stateData.length < 2) {
    return (
      <>
        `<button disabled>Calculate</button>{" "}
        <p>Add more Individual Expenses to calculate !</p>
      </>
    );
  } else {
    return <button onClick={handleMouseEvent}>Calculate</button>;
  }
};

export default CalculateButton;
