import * as React from "react";

const useFormData = (
  initial,
  validate,
  ...arg
): [
  string,
  React.Dispatch<any>,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  string
] => {
  const [state, setState] = React.useState<string>(initial);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return [state, setState, onChange, validate(state, ...arg)];
};

export default useFormData;
