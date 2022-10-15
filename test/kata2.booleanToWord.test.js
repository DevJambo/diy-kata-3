const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns 'Yes' when true and 'No' when false", () => {
  expect(booleanToWord(true)).toEqual("Yes");

    expect(booleanToWord(false)).toEqual("No");
  });
});
