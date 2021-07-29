import * as React from "react";
import addPersonToContextData from "../utils/addPersonToContextData";
import { validateName, validateAmount } from "../utils/formValidation";
import { useRef, useEffect, useContext } from "react";
import { calculatorContext, Person } from "../pages/calculator";

export interface AddIndividualFormProp {
  formprop: {
    name: string;
    amount: string;
    setName: React.Dispatch<any>;
    setAmount: React.Dispatch<any>;
    nameChange: (e: React.ChangeEvent<any>) => void;
    amountChange: (e: React.ChangeEvent<any>) => void;
    amountWarning: string;
    nameWarning: string;
  };
}

const AddIndividualForm = ({
  formprop: {
    name,
    amount,
    setName,
    setAmount,
    nameChange,
    amountChange,
    nameWarning,
    amountWarning,
  },
}: AddIndividualFormProp) => {
  const data = useContext(calculatorContext);
  const nameRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    addPersonToContextData(e, name, amount, data, setName, setAmount, nameRef);
  }

  return (
    <>
      {" "}
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
      </form>{" "}
    </>
  );
};

export default AddIndividualForm;
