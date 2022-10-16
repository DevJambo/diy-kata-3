const reachDestination = (distance, speed) => {
  const arrivalTime = distance / speed;
  const roundedArrivalTime = Math.round(arrivalTime / 0.5) * 0.5;
  return `I should be there in ${roundedArrivalTime} hours`;
};

module.exports = reachDestination;
