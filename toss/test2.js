const pickNum = (string)=>{
    let answer =[];

    for (let value of string) { parseInt(value) || parseInt(value) == 0 ?
        answer.push(parseInt(value)) : value
    } return answer.join('');
};



console.log(pickNum("$11%!@#1111@!$GKDSF!111"));