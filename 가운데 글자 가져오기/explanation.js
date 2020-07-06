function solution(s) {
    let answer = s.length % 2 === 0 ? s.substr((s.length / 2) - 1, 2) : s.substr(s.length / 2, 1)

    return answer;
};