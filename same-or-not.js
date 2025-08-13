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

// console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));
