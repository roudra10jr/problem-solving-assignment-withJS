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
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
