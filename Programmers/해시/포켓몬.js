function solution(nums) {
  let max = nums.length / 2;
  let pocket_set = new Set(nums);
  return max < [...pocket_set].length ? max : [...pocket_set].length;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
