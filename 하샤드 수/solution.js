function solution(x) {
  let reduce = 0;
  let answer = false;

  for (let i = 0; i < String(x).length; i++) {
    reduce += Number(String(x).charAt(i));
  }

  x % reduce === 0 ? (answer = true) : answer;
  return answer;
}
