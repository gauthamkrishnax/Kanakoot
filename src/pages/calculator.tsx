import * as React from "react";
import AddIndividualExpenses from "../components/AddIndividualExpenses";
import IndividualExpenseDetails from "../components/IndividualExpenseDetails";
import { useStateToContext } from "../hooks/useStateToContext";

export interface Person {
  name: string;
  amount: number;
}

export const calculatorContext = React.createContext<{
  stateData: Person[] | null;
  setStateFunction: React.Dispatch<React.SetStateAction<Person[]>>;
}>(null);

const CalculatorPage = () => {
  const data = useStateToContext<Person[] | null>(null);

  return (
    <div>
      <calculatorContext.Provider value={data}>
        <AddIndividualExpenses />
      </calculatorContext.Provider>
    </div>
  );
};

export default CalculatorPage;
