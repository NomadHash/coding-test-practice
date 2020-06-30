function solution(seoul) {
    let find;
    seoul.forEach((element, idx) => element === "Kim" ? find = idx : console.log("d"));
    return `김서방은 ${find}에 있다`;
};