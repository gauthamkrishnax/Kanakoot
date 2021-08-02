import * as React from "react";
import { Person } from "../pages/calculator";
import { calculatorContext } from "../pages/calculator";
import { useContext } from "react";
import { ReportInterface } from "../utils/types";
import { createReport } from "../utils/createReport";

import * as style from "../styles/components/CalculateButton.module.scss";

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
    <div className={style.disabled}>
      <button disabled>Calculate</button>{" "}
      <p>Add more Individual Expenses to calculate !</p>
    </div>
  ) : (
    <div className={style.active}>
      <button onClick={handleMouseEvent}>Calculate</button>
    </div>
  );
};

export default CalculateButton;
