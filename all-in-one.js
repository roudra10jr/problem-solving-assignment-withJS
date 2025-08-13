function totalFine(fare) {
  // You have to write your code here
  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }
  const penalty = fare * (20 / 100) + 30;
  const totalPenalty = fare + penalty;
  return totalPenalty;
}

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  }
  let string = str.toUpperCase();
  let modifyStr = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      continue;
    }
    modifyStr += string[i];
  }
  return modifyStr;
}

function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  const team1 = player1.foul + player1.cardY + player1.cardR;
  const team2 = player2.foul + player2.cardY + player2.cardR;

  if (team1 > team2) {
    return player2.name;
  }
  if (team1 < team2) {
    return player1.name;
  }
  if (team1 === team2) {
    return "Tie";
  }
}

function isSame(arr1, arr2) {
  // You have to write your code here
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return "Invalid";
  }
  const length1 = arr1.length;
  const length2 = arr2.length;

  for (let i = 0, j = 0; i < length1; i++, j++) {
    if (length1 !== length2) {
      return false;
    }
    if (arr1[i] !== arr2[j]) {
      return false;
    }
    // return true;
  }
  return true;
}

function resultReport(marks) {
  // You have to write your code here
  if (Array.isArray(marks) === false) {
    return "Invalid";
  }
  let totalMarks = 0;
  let countPass = 0;
  let countFail = 0;

  const countSubject = marks.length;
  for (const mark of marks) {
    totalMarks += mark;
  }
  let avgMarks = Math.round(totalMarks / countSubject);
  if (countSubject === 0) {
    avgMarks = 0;
  }

  for (let i = 0; i < countSubject; i++) {
    if (marks[i] >= 40) {
      countPass++;
    } else {
      countFail++;
    }
  }
  const results = {
    finalScore: avgMarks,
    pass: countPass,
    fail: countFail,
  };
  return results;
}

console.log(totalFine("65"));
console.log(onlyCharacter(true));
console.log(
  bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
  )
);
console.log(isSame([1, undefined, 3], [1, null, 3]));
console.log(resultReport([]));
