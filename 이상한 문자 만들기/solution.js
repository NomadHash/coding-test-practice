function solution(s) {
  let answer = "";
  let number = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== " ") {
      if (number % 2 === 0) {
        answer += s.charAt(i).toUpperCase();
        number += 1;
      } else {
        answer += s.charAt(i).toLowerCase();
        number += 1;
      }
    } else {
      number = 0;
      answer += " ";
    }
  }
  return answer;
}
