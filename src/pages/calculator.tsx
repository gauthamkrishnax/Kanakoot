import * as React from "react";
import Expenses from "../components/Expenses";
import { useStateWithDispatch } from "../hooks/useStateWithDispatch";
import { ReportInterface } from "../utils/types";
import Report from "../components/Report";
import IndividualExpenseDetails from "../components/IndividualExpenseDetails";
import ErrorBoundary from "../components/layout/ErrorBoundary";

import LogoMark from "../assets/LogoMark.svg";

import * as style from "../styles/components/calculator.module.scss";
import Layout from "../components/layout/Layout";

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
    <Layout>
      <main>
        <calculatorContext.Provider value={contextData}>
          <ErrorBoundary>
            <div className={style.container}>
              <div className={style.expenseFromAndDetails}>
                <Expenses />
                <IndividualExpenseDetails />
              </div>
              <Report />
            </div>
          </ErrorBoundary>
        </calculatorContext.Provider>
        <div className="calculator-bg-logo">
          <img src={LogoMark} alt="kanakoot logo faded" />
        </div>
      </main>
    </Layout>
  );
};

export default CalculatorPage;
