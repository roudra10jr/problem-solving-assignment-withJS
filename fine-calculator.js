function totalFine(fare) {
  // You have to write your code here
  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }
  const penalty = fare * (20 / 100) + 30;
  const totalPenalty = fare + penalty;
  return totalPenalty;
}
// console.log(totalFine("50"));
