function solution(bridge_length, weight, truck_weights) {
  let bridge = [];
  let copy = [...truck_weights];
  let out = [];
  let count = 0;

  let index = 0;

  let total = 0;

  while (out.length !== truck_weights.length) {
    count++;

    if (bridge[0] && count - bridge[0].currTime === bridge_length) {
      total -= bridge[0].weight;
      out.push(bridge.shift());
    }

    if (total + copy[index] <= weight) {
      bridge.push({ weight: copy[index], currTime: count });
      total += copy[index];
      index++;
    }
  }
  return count;
}
