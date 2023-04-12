function compare(a, b) {
  //a is less than b by some ordering criterion
  //a가 b보다 순서기준에서 더 작을때
  if (a < b) {
    return -1;
  }
  //a is greater than b by the ordering criterion
  //a가 b보다 순서기준에서 더 클때
  if (a < b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

let array = ["c", "b", "a"];

console.log(array.sort(compare));
