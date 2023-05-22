function merge_sort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = merge_sort(arr.slice(0, mid)); //
  const right = merge_sort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let new_arr = [];
  let left_index = 0;
  let right_index = 0;

  while (left_index <= left.length - 1 && right_index <= right.length - 1) {
    if (left[left_index] < right[right_index]) {
      new_arr.push(left[left_index]);
      left_index++;
    } else {
      new_arr.push(right[right_index]);
      right_index++;
    }
  }

  return new_arr
    .concat(left.slice(left_index))
    .concat(right.slice(right_index));
}

console.log(merge_sort([3, 2, 3, 42, 2, 3]));
