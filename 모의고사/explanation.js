function solution(answers) {
    let init = [0, 0, 0];
    let maxi = [];
    let answer = [];
    let quitters = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    for (let i = 0; i < answers.length; i++) {
        quitters[0][i % 5] === answers[i] ? init[0]++ : init;
        quitters[1][i % 8] === answers[i] ? init[1]++ : init;
        quitters[2][i % 10] === answers[i] ? init[2]++ : init;
    };
    maxi.push(Math.max(...init));

    for (let a = 0; a < 3; a++) {
        if (init[a] === maxi[0]) {
            answer.push(a + 1)
        }
    }
    return answer
};
