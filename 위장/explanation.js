function solution(clothes) {
  let answer = 1;
  let closetObj = {};

  for (let i = 0; i < clothes.length; i++) {
    if (!closetObj[clothes[i][1]]) {
      closetObj[clothes[i][1]] = 1;
    } else {
      closetObj[clothes[i][1]] = closetObj[clothes[i][1]] + 1;
    }
  }

  for (i in closetObj) {
    answer *= closetObj[i] + 1;
  }

  return answer - 1;
}
