import * as React from "react";
import Expenses from "../components/Expenses";
import { useStateWithDispatch } from "../hooks/useStateWithDispatch";
import { ReportInterface } from "../utils/types";
import Report from "../components/Report";
import IndividualExpenseDetails from "../components/IndividualExpenseDetails";
import Layout from "../components/layout/Layout";
import ErrorBoundary from "../components/layout/ErrorBoundary";

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
    </main>
  );
};

export default CalculatorPage;
