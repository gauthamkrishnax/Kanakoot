import * as React from "react";
import Expenses from "../components/Expenses";
import { useStateWithDispatch } from "../hooks/useStateWithDispatch";

export interface Person {
  name: string;
  amount: number;
}

export const calculatorContext = React.createContext<{
  stateData: Person[] | null;
  setStateFunction: React.Dispatch<React.SetStateAction<Person[]>>;
}>(null);

const CalculatorPage = () => {
  const data = useStateWithDispatch<Person[] | null>(null);

  return (
    <div>
      <calculatorContext.Provider value={data}>
        <Expenses />
      </calculatorContext.Provider>
    </div>
  );
};

export default CalculatorPage;
