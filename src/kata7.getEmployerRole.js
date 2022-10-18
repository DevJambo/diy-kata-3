const getEmployerRole = (employeeName, employees) => {
  const workerName = employees.find((person) => person.name === employeeName);
  return workerName.role;
};
module.exports = getEmployerRole;
