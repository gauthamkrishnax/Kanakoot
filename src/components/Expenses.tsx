import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import IndividualExpenseDetails from "./IndividualExpenseDetails";
import AddIndividualForm from "./AddIndividualForm";
import Report from "./Report";
import useFormData from "../hooks/useFormData";
import { validateName, validateAmount } from "../utils/formValidation";
import { createReport } from "../utils/createReport";
import { ReportInterface } from "../utils/types";
import { useStateWithDispatch } from "../hooks/useStateWithDispatch";

const Expenses = () => {
  const data = useContext(calculatorContext);

  const [name, setName, nameChange, nameWarning] = useFormData(
    "",
    validateName,
    data.stateData
  );

  const [amount, setAmount, amountChange, amountWarning] = useFormData(
    "",
    validateAmount
  );

  const prop = {
    name: name,
    setName: setName,
    nameChange: nameChange,
    nameWarning: nameWarning,
    amount: amount,
    setAmount: setAmount,
    amountChange: amountChange,
    amountWarning: amountWarning,
  };

  const report = useStateWithDispatch<ReportInterface | null>(null);

  return (
    <div>
      <AddIndividualForm formprop={prop} />
      <IndividualExpenseDetails setReport={report.setStateFunction} />
      <Report report={report} />
    </div>
  );
};

export default Expenses;
