function solution(clothes) {
  const clothesObj = {};
  let answer = 1;

  clothes.map((clothe) => {
    if (clothesObj[clothe[1]]) return (clothesObj[clothe[1]] += 1);
    else {
      return (clothesObj[clothe[1]] = 1);
    }
  });

  const keys = Object.keys(clothesObj);

  keys.forEach((key) => {
    //+1을 해주는 이유는 입지 않았을 때까지 고려해야하기 때문이다.
    answer *= clothesObj[key] + 1;
  });
  //-1을 해주는 이유는 아무것도 안입을 수는 없기 때문이다.
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
