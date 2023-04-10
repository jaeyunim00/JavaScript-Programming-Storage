function insertion_sort(arr) {
  let i, j, key;
  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
}

let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

let startTime = new Date().getTime();
insertion_sort(arr);
let endTime = new Date().getTime();

console.log("삽입 정렬 소요 시간: ", endTime - startTime, "ms.");
//293ms

arr = Array.from({ length: 30000 }, () => 7);

startTime = new Date().getTime();
insertion_sort(arr);
endTime = new Date().getTime();

console.log(
  "정렬된 배열에 대한 삽입 정렬 소요 시간: ",
  endTime - startTime,
  "ms."
);
//0ms
