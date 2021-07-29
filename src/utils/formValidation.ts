import { person } from "./types";

export function validateName(name: string, data: person[]): string | null {
  let warning: string | null = null;
  if (data)
    data.forEach((person) => {
      if (person.name.toLowerCase() === name.toLowerCase()) {
        warning = `${name} already Exist. The amounts will be added !`;
      }
    });
  return warning;
}

export function validateAmount(amount: number): string | null {
  let warning: string | null = null;
  if (isNaN(amount)) {
    warning = "Amount Not a Number. Please enter only digits !";
  }
  return warning;
}
