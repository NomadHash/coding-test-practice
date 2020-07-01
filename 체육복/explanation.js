function solution(n, lost, reserve) {
    let answer = n - lost.length;

    lost.forEach(function (element) {
        for (let i = 0; i < reserve.length; i++) {
            if (element === Number(reserve[i])) {
                lost[lost.indexOf(element)] = "same1";
                reserve[i] = "same2";
                answer++;
                return;
            }
        }
    });

    lost.forEach(function (element) {
        for (let i = 0; i < reserve.length; i++) {
            if (element === Number(reserve[i]) + 1 || element === Number(reserve[i]) - 1) {
                lost[lost.indexOf(element)] = "same1";
                reserve[i] = "same2";
                answer++;
                return;
            }
        }
    });
    return answer;
};