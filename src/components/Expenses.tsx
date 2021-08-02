import * as React from "react";
import { useContext } from "react";
import { calculatorContext } from "../pages/calculator";
import AddIndividualForm from "./AddIndividualForm";
import useFormData from "../hooks/useFormData";
import { validateName, validateAmount } from "../utils/formValidation";

const Expenses = () => {
  const { data, report } = useContext(calculatorContext);

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
  return <AddIndividualForm formprop={prop} />;
};

export default Expenses;
