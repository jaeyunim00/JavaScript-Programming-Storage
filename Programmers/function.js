function q1(arr) {
  arr.sort();
  answer = "";
  let set = new Set(arr);
  for (i of Array.from(set)) {
    let count = 0;
    for (j of arr) {
      if (i == j) {
        count++;
      }
    }
    if (count !== 1) {
      answer += count + " ";
    }
  }

  if (answer == "") {
    console.log(-1);
  } else {
    console.log(answer);
  }
}

q1([3, 5, 7, 9, 1]);
