import * as React from "react";

const PersonListElement = ({ name, amount }) => {
  return (
    <li>
      <span>{name} </span>
      <span>{amount}</span>
    </li>
  );
};

export default PersonListElement;
