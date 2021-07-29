import { validateAmount } from "./formValidation";
import { Person } from "../pages/calculator";

export default function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  name: string,
  amount: string,
  data: {
    stateData: Person[];
    setStateFunction: React.Dispatch<React.SetStateAction<Person[]>>;
  },
  setName: React.Dispatch<any>,
  setAmount: React.Dispatch<any>,
  focusRef: React.MutableRefObject<any>
) {
  e.preventDefault();
  if (validateAmount(parseFloat(amount))) {
  }
  if (data.stateData) {
    data.stateData.push({
      name: name,
      amount: parseFloat(amount),
    });
  } else {
    data.stateData = [
      {
        name: name,
        amount: parseFloat(amount),
      },
    ];
  }
  data.setStateFunction(data.stateData);
  setName("");
  setAmount("");
  focusRef.current.focus();
}
