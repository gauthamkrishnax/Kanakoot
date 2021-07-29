import * as React from "react";
import { useContext, useRef } from "react";
import useFormData from "../hooks/useFormData";
import { calculatorContext } from "../pages/calculator";
import { validateAmount, validateName } from "../utils/formValidation";
import addPersonToContextData from "../utils/addPersonToContextData";
import IndividualExpenseDetails from "./IndividualExpenseDetails";
import { useEffect } from "react";

const AddIndividualExpenses = () => {
  const data = useContext(calculatorContext);
  const nameRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const [name, setName, nameChange, nameWarning] = useFormData(
    "",
    validateName,
    data.stateData
  );

  const [amount, setAmount, amountChange, amountWarning] = useFormData(
    "",
    validateAmount
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    addPersonToContextData(e, name, amount, data, setName, setAmount, nameRef);
  }

  return (
    <div>
      <h6>Add Individual Expenses :</h6>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameChange}
            ref={nameRef}
          />
        </label>
        <label htmlFor="amount">
          Amount
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={amountChange}
          />
        </label>
        <span>{amountWarning || nameWarning}</span>
        {validateAmount(parseFloat(amount)) ? (
          <input type="submit" value="Submit" disabled />
        ) : (
          <input type="submit" value="Submit" />
        )}
      </form>
      <IndividualExpenseDetails />
    </div>
  );
};

export default AddIndividualExpenses;
