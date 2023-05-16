let arr = [];

for (let i = 0; i < 100; i++) {
  arr.push((i + 1) * 2 - 1);
}

let target = 41;

function b_search_recur(arr, target, left, right) {
  let mid = parseInt((left + right) / 2);

  if (left > right) {
    return -1;
  }

  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] < target) {
    return b_search_recur(arr, target, mid + 1, right);
  } else {
    return b_search_recur(arr, target, left, mid - 1);
  }
}

function b_search_loop(arr, target, left, right) {
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const t0 = performance.now();
b_search_recur(arr, target, 0, arr.length - 1);
const t1 = performance.now();
console.log(t1 - t0, "milliseconds(재귀)");

const t2 = performance.now();
b_search_loop(arr, target, 0, arr.length - 1);
const t3 = performance.now();
console.log(t3 - t2, "milliseconds(반복문)");
