function solution(a, b) {
    let answer = 0;
    if (b > a) {
        for (let i = a; i <= b; i++) {
            answer = answer + i
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            answer = answer + i
        }
    } else {
        answer = answer + a
    }
    return answer;
};