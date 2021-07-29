import * as React from "react";

export function useStateWithDispatch<T>(initial: T): {
  stateData: T | null;
  setStateFunction: React.Dispatch<React.SetStateAction<T>>;
} {
  interface ContextInterface {
    stateData: T | null;
    setStateFunction: React.Dispatch<React.SetStateAction<T>>;
  }

  const [state, setState] = React.useState<T | null>(initial);
  const contextData = {
    stateData: state,
    setStateFunction: setState,
  };
  return contextData;
}
