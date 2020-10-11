function solution(numbers) {
  let strSort = (a, b) => {
    let caseA = Number(String(a) + String(b)) < Number(String(b) + String(a));
    let caseB = Number(String(b) + String(a)) < Number(String(a) + String(b));
    if (caseA > caseB) return 1;
    if (caseB > caseA) return -1;
  };
  return numbers.sort(strSort)[0] === 0 ? "0" : numbers.sort(strSort).join("");
}
