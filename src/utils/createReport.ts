import Report from "../components/Report";
import { Person } from "../pages/calculator";
import findWhoOwes from "./findWhoOwes";
import { ReportInterface } from "./types";

export function createReport(data: Person[]): ReportInterface {
  return findWhoOwes(data);
}
