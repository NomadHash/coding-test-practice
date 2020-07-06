function solution(arr) {
    let answer = arr.reduce((init, val) => {
        init[init.length - 1] !== val ? init.push(val) : init;
        return init;
    }, []);
    return answer;
};