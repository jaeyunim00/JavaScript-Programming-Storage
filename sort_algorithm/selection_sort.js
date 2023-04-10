function selection_sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        // [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

let arr = Array.from({ length: 30000 }, () => Math.floor(Math.random() * 1000));

let startTime = new Date().getTime();
selection_sort(arr);
let endTime = new Date().getTime();

console.log("선택 정렬 소요 시간: ", endTime - startTime, "ms.");
//593ms

arr = Array.from({ length: 30000 }, () => 7);

startTime = new Date().getTime();
selection_sort(arr);
endTime = new Date().getTime();

console.log(
  "정렬된 배열에 대한 선택 정렬 소요 시간: ",
  endTime - startTime,
  "ms."
);
//493ms
