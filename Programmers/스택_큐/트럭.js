function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  let trucks = truck_weights;
  let bridge = new Array(bridge_length).fill(0);
  let i = 0;
  let count = 0;

  while (true) {
    let now_bride_weight = bridge.reduce((acc, cur) => acc + cur, 0);
    if (now_bride_weight !== 0) {
      count++;
    }
    if (i == truck_weights.length) {
      break;
    }

    if (
      now_bride_weight + truck_weights[i] <= weight ||
      now_bride_weight - bridge[0] + truck_weights[i] <= weight
    ) {
      bridge.push(truck_weights[i]);
      bridge.shift();
      i++;
    } else {
      bridge.push(0);
      bridge.shift();
    }
    console.log(count, bridge);
  }
  console.log(count);
  answer = count + bridge_length;
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
