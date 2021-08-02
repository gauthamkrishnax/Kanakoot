import * as React from "react";

import Trash from "../assets/trash.inline.svg";

const PersonListElement = ({ name, amount, no }) => {
  return (
    <tr>
      <td>{no + 1}.</td>
      <td>{name} </td>
      <td>{amount}</td>
      <td>
        Delete <Trash />
      </td>
    </tr>
  );
};

export default PersonListElement;
