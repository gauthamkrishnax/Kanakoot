import * as React from "react";
import { Person } from "../pages/calculator";
import { calculatorContext } from "../pages/calculator";
import { useContext } from "react";
import { ReportInterface } from "../utils/types";
import { createReport } from "../utils/createReport";

const CalculateButton = () => {
  const { data, report } = useContext(calculatorContext);

  const handleMouseEvent = () => {
    try {
      report.setStateFunction(createReport(data.stateData));
    } catch (err) {
      console.error("Algorithm did not work ! try refreshing !");
    }
  };
  return data.stateData == null || data.stateData.length < 2 ? (
    <>
      <button disabled>Calculate</button>{" "}
      <p>Add more Individual Expenses to calculate !</p>
    </>
  ) : (
    <button onClick={handleMouseEvent}>Calculate</button>
  );
};

export default CalculateButton;
