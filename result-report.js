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

console.log(resultReport([]));
