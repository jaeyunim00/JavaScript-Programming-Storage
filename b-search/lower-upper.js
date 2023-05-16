function lowerBound(arr, target, left, right) {
  while (left < right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return right;
}

function upperBound(arr, target, left, right) {
  while (left < right) {
    let mid = parseInt((left + right) / 2);
    if (arr[mid] > target) right = mid;
    else left = mid + 1;
  }
  return right;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);

  return rightIndex - leftIndex;
}

let arr = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];

console.log(countByRange(arr, 2, 4));
