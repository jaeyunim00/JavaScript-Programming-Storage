const list = ["a", "b", "c", "d", "e"];
const pick = 3;
const result = [];

function swap(i, j) {
  [list[i], list[j]] = [list[j], list[i]];
}

function permutation(i) {
  if (i == pick) {
    result.push(list.slice(0, i).join(""));
    return;
  }

  for (let j = i; j < list.length; j++) {
    swap(i, j);
    permutation(i + 1);
    swap(j, i);
  }
}

permutation(0);

console.log(result);
