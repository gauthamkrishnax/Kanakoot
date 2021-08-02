import { Person } from "../pages/calculator";

export default function deletePersonFromContextData(
  data: {
    stateData: Person[];
    setStateFunction: React.Dispatch<React.SetStateAction<Person[]>>;
  },
  nameid: string
) {
  const temp = data.stateData.filter(
    (e) => e.name.toLowerCase() != nameid.toLowerCase()
  );
  data.setStateFunction(temp);
}
