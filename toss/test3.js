/* 숫자를 받아서 숫자 단위 자리수
예). 10000 -> 10,000
987654321 -> 987,654,321
*/

const addCom = (num) => {
    const reverse = String(num).split("").reverse().join("");
    let answer = ""
    let as = ""

    for (let i = 0; i < reverse.length; i++) {

        if (i % 3 === 0 && i < 4) {
            answer += `,${reverse[i]}`
        } else if (i % 4 === 0 && i < 8) {
            answer += `만${reverse[i]}`
        } else if (i % 8 === 0) {
            answer += `억${reverse[i]}`
        } else {
            answer += reverse[i]
        };
    }
    let answerNum = `${answer.split("").reverse().join("").slice(0, -1)}원`

    let numArray = answerNum.split("");

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] === "만" && numArray[i + 1] === '0' && numArray[i + 2] === ",") {
            console.log("f");
            numArray.splice(i + 1, 2);
        } else if (numArray[i] === "," && numArray[i + 1] === "0") {
            console.log("f");
            numArray.splice(i, 1);
        } else if (numArray[i] === "만" && numArray[i + 1] === "0") {
            console.log("f");
            numArray.splice(i+1, 1);
        }
    }
    return numArray.join('');
};



console.log(addCom(123908800390));