import * as React from "react";
import Expenses from "../components/Expenses";
import { useStateWithDispatch } from "../hooks/useStateWithDispatch";
import { ReportInterface } from "../utils/types";
import Report from "../components/Report";
import IndividualExpenseDetails from "../components/IndividualExpenseDetails";
import ErrorBoundary from "../components/layout/ErrorBoundary";

import LogoMark from "../assets/LogoMark.svg";

export interface Person {
  name: string;
  amount: number;
}

export const calculatorContext = React.createContext<{
  data: {
    stateData: Person[] | null;
    setStateFunction: React.Dispatch<React.SetStateAction<Person[]>>;
  };
  report: {
    stateData: ReportInterface | null;
    setStateFunction: React.Dispatch<React.SetStateAction<ReportInterface>>;
  };
}>(null);

const CalculatorPage = () => {
  const data = useStateWithDispatch<Person[] | null>(null);
  const report = useStateWithDispatch<ReportInterface | null>(null);
  const contextData = { data: data, report: report };
  return (
    <main>
      <calculatorContext.Provider value={contextData}>
        <ErrorBoundary>
          <Expenses />
          <IndividualExpenseDetails />
          <Report />
        </ErrorBoundary>
      </calculatorContext.Provider>
      <img
        className="calculator-bg-logo"
        src={LogoMark}
        alt="kanakoot logo faded"
      />
    </main>
  );
};

export default CalculatorPage;
