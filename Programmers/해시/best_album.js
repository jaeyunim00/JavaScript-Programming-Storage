function solution(genres, plays) {
  let answer = [];
  let set = new Set(genres);
  let real = [];
  [...set].map((genre) => {
    let arr = [];
    let temp = [];
    for (let i = 0; i < genres.length; i++) {
      if (genre == genres[i]) {
        arr.push([plays[i], i]);
      }
    }
    arr.sort((a, b) => b[0] - a[0]);

    for (let i = 0; i < 2; i++) {
      temp.push(arr[i][1]);
    }
    real.push([temp, arr.reduce((acc, cur) => acc + cur[0], 0)]);
  });

  real.sort((a, b) => b[1] - a[1]);
  real.map((x) => {
    x.pop();
  });

  for (let i = 0; i < [...set].length; i++) {
    for (let j = 0; j < 2; j++) {
      answer.push(real[i][0][j]);
    }
  }
  return answer;
}

function best_solution(genres, plays) {
  // 1. 장르별로 총 재생횟수의 합을 저장하고, 내림차순 정리해야한다.
  // 2. 고유번호, 장르, 재생횟수가 모인 객체가 필요하다.
  // 3. 2번 배열에서 1번 배열 객체의 키 값에 해당하는 장르들을
  // 배열에 따로 저장해, 내림차순 정렬한 후 상위 두개 원소의 고유번호만
  // 뽑아서 answer에 push해준다.
  let answer = [];

  let playCntByGenre = {};

  for (let i = 0; i < genres.length; i++) {
    playCntByGenre[genres[i]] = playCntByGenre[genres[i]]
      ? playCntByGenre[genres[i]] + plays[i]
      : plays[i];
  }

  let keyValueArr = Object.entries(playCntByGenre);
  keyValueArr.sort((a, b) => b[1] - a[1]);

  let allInfoObj = genres.map((g, i) => ({
    genre: g,
    index: i,
    playCnt: plays[i],
  }));

  keyValueArr.forEach((k, i) => {
    let current = [];
    for (let j = 0; j < allInfoObj.length; j++) {
      if (k[0] === allInfoObj[j].genre) {
        current.push(allInfoObj[j]);
      }
    }
    current.sort((a, b) => b.playCnt - a.playCnt);
    current.forEach((c, i) => {
      if (i < 2) {
        answer.push(c.index);
      }
    });
  });
  return answer;
}

console.log(
  best_solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
