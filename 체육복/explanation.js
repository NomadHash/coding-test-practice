function solution(n, lost, reserve) {
    let lostP = lost
    let reserveP = reserve
    let answer = n - lost.length;

    lostP.forEach(function (element) {
        for (let i = 0; i < reserve.length; i++) {
            if (element === Number(reserveP[i])) {
                lostP[lostP.indexOf(element)] = "g";
                reserveP[i] = "s";
                answer++;
                return;
            }
        }
    });

    lostP.forEach(function (element) {
        for (let i = 0; i < reserve.length; i++) {
            if (element === Number(reserveP[i]) + 1 || element === Number(reserveP[i]) - 1) {
                lostP[lostP.indexOf(element)] = "g";
                reserveP[i] = "s";
                answer++;
                return;
            }
        }
    });
    return answer;
};