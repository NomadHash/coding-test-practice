const ageCheck = age => {
    const ageList = ["10","20","30","40","50","60","70","80","90"];
    const firstChar = ageList[String(age).charAt(0) - 1];
    let ageGroup = "";

     age < 10 ? ageGroup = "아동 입니다." :
     age >= 100 ? ageGroup = "100세 이상 입니다." : ageGroup = `${firstChar}대입니다.`;
    
     return ageGroup;
    };

console.log(ageCheck(43));