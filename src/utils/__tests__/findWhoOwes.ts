import findWhoOwes from "../findWhoOwes";
import { data1, data2, data3, result1, result2, result3 } from "../mockData";

describe("Find who owes whom :", () => {
  test("With data - 1", () => {
    expect(findWhoOwes(data1).whoOwesReport).toEqual(result1);
  });
  test("With data - 2", () => {
    expect(findWhoOwes(data2).whoOwesReport).toEqual(result2);
  });
  test("With data - 3", () => {
    expect(findWhoOwes(data3).whoOwesReport).toEqual(result3);
  });
});
