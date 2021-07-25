export interface person {
  name: string;
  amountSpent: number;
}

export interface personExpense extends person {
  expense: number;
  expenseStatus: "Equal" | "More" | "Less";
}

export interface personOweDetails extends personExpense {
  oweWho: string;
  oweHowMuch: number;
}
