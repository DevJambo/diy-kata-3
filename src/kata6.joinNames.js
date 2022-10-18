const joinNames = (namesObj) => {
  const namesArray = namesObj.map((obj) => obj.name);
  const lastName = namesArray.pop();
  return `${namesArray.join(", ")} & ${lastName}`;
};
module.exports = joinNames;
