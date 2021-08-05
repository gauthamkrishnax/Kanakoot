import * as React from "react";
import addPersonToContextData from "../utils/addPersonToContextData";
import { validateAmount } from "../utils/formValidation";
import { useRef, useEffect, useContext } from "react";
import { calculatorContext } from "../pages/calculator";

import * as style from "../styles/components/Addindividualform.module.scss";

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
  const { data, report } = useContext(calculatorContext);
  const nameRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    addPersonToContextData(e, name, amount, data, setName, setAmount, nameRef);
  }

  return (
    <div className={`${style.container} expenseForm`}>
      <h6>Add Individual Expenses :</h6>
      <form onSubmit={handleSubmit}>
        <div>
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
        </div>
        {validateAmount(amount, name) != null ? (
          <div className={style.submit}>
            <span>
              {amountWarning}
              {nameWarning}
            </span>
            <input
              type="submit"
              value="Add Person"
              title="Add data to the form"
              disabled
            />
          </div>
        ) : (
          <div className={style.submit}>
            <span>{nameWarning}</span>
            <input type="submit" value="Add Person" />
          </div>
        )}
      </form>
    </div>
  );
};

export default AddIndividualForm;
