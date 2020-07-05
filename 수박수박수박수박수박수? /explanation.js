function solution(n) {
    const word = "수박";
    let Arr = [];
    for (let i = 0; i < n; i++) {
        i % 2 ? Arr.push(word[1]) : Arr.push(word[0]);
    };
    let answer = Arr.join("")
    return answer;
};