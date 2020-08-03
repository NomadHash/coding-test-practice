/*
숫자를 받고

Type - num

100, 000, 020

1 억 1, 000 만 20 원
 */



const trans = (num) => {
    const answer = '';
    let strNum = String(num);
    
    if (strNum.length <= 4) {
        console.log(strNum + "원");
    }
}

trans(2002)