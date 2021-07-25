import findWhoOwes from "../findWhoOwes";
import { data1, result1 } from "../mockData";

describe("Find who owes whom :", () => {
  test("With data - 1", () => {
    expect(findWhoOwes(data1)).toEqual(result1);
  });
});
