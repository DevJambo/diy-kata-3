const { humanCatDogYears } = require("../src");

test("returns an array of age numbers based on formulas in the track for human, cat and dog years", () => {
  expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  expect(humanCatDogYears(20)).toEqual([20, 96, 114]);
});
