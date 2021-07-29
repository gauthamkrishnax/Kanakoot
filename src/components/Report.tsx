import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import { ReportInterface } from "../utils/types";
import CalculateButton from "./CalculateButton";

const Report = ({
  report,
}: {
  report: {
    stateData: ReportInterface;
    setStateFunction: React.Dispatch<React.SetStateAction<ReportInterface>>;
  };
}) => {
  return (
    <div>
      <CalculateButton setReport={report.setStateFunction} />
    </div>
  );
};

export default Report;
