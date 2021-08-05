import { Person } from "../pages/calculator";

export function validateName(name: string, data: Person[]): string | null {
  let warning: string | null = null;
  if (data)
    data.forEach((person) => {
      if (person.name.toLowerCase() === name.toLowerCase()) {
        warning = `${name} already Exist. The amounts will be added !`;
      }
    });

  return warning;
}

export function validateAmount(amount: string, name: string): string | null {
  let warning: string | null = null;
  if (!name) {
    warning = "name empty ";
  }
  if (amount.match(/^[0-9]+$/) === null) {
    warning = "Amount Not a Number. Please enter only digits !";
  }
  if (name === "" || amount === "") {
    warning = " ";
  }

  return warning;
}
