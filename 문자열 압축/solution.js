function solution(s) {
  let ans = 987654321;
  for (let i = 1; i <= s.length / 2 + 1; i++) {
    let str = "";
    let num = 1;
    let preStr = "";
    let curStr = "";

    for (let k = 0; k <= s.length; k += i) {
      curStr = s.substr(k, i);
      if (preStr === curStr) {
        num++;
      } else {
        if (num !== 1) {
          str += num + preStr;
          num = 1;
        } else {
          str += preStr;
        }
      }

      if (s.length - k < i) {
        str += curStr;
      }

      preStr = curStr;
    }

    ans = ans < str.length ? ans : str.length;
  }

  return ans;
}
