const numberToReversedDigits = (number) => {
  const newNumbers = number.toString().split("");
  newNumbers.reverse();
  return newNumbers.map((numberAsString) => Number(numberAsString));
};
module.exports = numberToReversedDigits;
