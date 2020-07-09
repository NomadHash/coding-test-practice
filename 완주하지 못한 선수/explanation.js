function solution(participant, comp) {
    var bb = participant.reduce((acc, p) => {
        acc[p] = (acc[p]) ? acc[p] + 1 : 1;
        return acc;
    }, {});

    comp.forEach((b) => {
        if (bb[b]) {
            bb[b] -= 1
        };
        if (bb[b] === 0) {
            delete bb[b]
        };
    });
    return Object.keys(bb)[0];
}