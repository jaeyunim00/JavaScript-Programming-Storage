let sorted = [];

function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left; //결과 배열의 인덱스

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      sorted[k++] = arr[i++];
    } else {
      sorted[k++] = arr[j++];
    }
  }

  if (i > mid) {
    for (; j <= right; j++) {
      sorted[k++] = arr[j];
    }
  } else {
    for (; i <= mid; i++) {
      sorted[k++] = arr[i];
    }
  }

  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

function merge_sort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    merge_sort(arr, left, mid);
    merge_sort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }

  return arr;
}

let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

let startTime = new Date().getTime();
merge_sort(arr, 0, arr.length - 1);
let endTime = new Date().getTime();
console.log("병합 정렬 소요 시간: ", endTime - startTime, "ms.");
//9ms

arr = Array.from({ length: 30000 }, () => 7);

startTime = new Date().getTime();
merge_sort(arr, 0, arr.length - 1);
endTime = new Date().getTime();

console.log(
  "정렬된 배열에 대한 병합 정렬 소요 시간: ",
  endTime - startTime,
  "ms."
);
//2ms

//일반적으로 재귀 함수를 사용한다는 점에서 함수 호출 횟수가 많이 발생한다.
//이런 문제는 오버해드로 이어진다.

//시간복잡도는 O(NlogN)을 보장한다.
