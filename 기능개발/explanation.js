function solution(progresses, speeds) {
  var answer = [];
  let done = [];
  let stand = 0;

  for (let i = 0; i < progresses.length; i++) {
    done.push("#");
  }

  for (let i = 0; i < 100; i++) {
    for (let z = 0; z < progresses.length; z++) {
      progresses[z] = progresses[z] + speeds[z];
      if (progresses[z] >= 100) {
        done[z] = z + 1;
        continue;
      }
    }
    let count = 0;
    if (done[stand] !== "#") {
      for (let i = stand; i < done.length; i++) {
        if (done[i] !== "#") {
          count++;

          if (i === done.length - 1) {
            answer.push(count);
            return answer;
          }
        } else if (done[i] === "#") {
          answer.push(count);

          stand += answer[answer.length - 1];
          break;
        }
      }
    }
  }
  return answer;
}
