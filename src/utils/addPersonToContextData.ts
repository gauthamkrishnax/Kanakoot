import { validateAmount, validateName } from "./formValidation";
import { Person } from "../pages/calculator";

export default function addPersonToContextData(
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
  let sameName = false;
  if (data.stateData) {
    data.stateData.forEach((e) => {
      if (e.name.toLowerCase() === name.toLowerCase()) {
        e.amount += parseFloat(amount);
        sameName = true;
      }
    });
    data.stateData.push({
      name: name,
      amount: parseFloat(amount),
    });
    if (sameName) data.stateData.pop();
  } else {
    data.stateData = [
      {
        name: name,
        amount: parseFloat(amount),
      },
    ];
  }
  data.setStateFunction([...data.stateData]);
  setName("");
  setAmount("");
  focusRef.current.focus();
}
