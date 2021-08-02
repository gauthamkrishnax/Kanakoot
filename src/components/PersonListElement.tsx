import * as React from "react";
import deletePersonFromContextData from "../utils/DeletePersonFromContextData";
import { calculatorContext } from "../pages/calculator";

import Trash from "../assets/trash.inline.svg";

const PersonListElement = ({ name, amount, no, deletePerson }) => {
  const deleteMe = (name) => {
    deletePerson(name);
  };
  const { data } = React.useContext(calculatorContext);
  return (
    <tr>
      <td>{no + 1}.</td>
      <td>{name} </td>
      <td>{amount}</td>
      <td>
        <button onClick={() => deleteMe(name)}>
          Delete <Trash />
        </button>
      </td>
    </tr>
  );
};
export default PersonListElement;
