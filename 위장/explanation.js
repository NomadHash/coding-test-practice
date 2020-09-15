function solution(clothes) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < clothes.length; i++) {
    arr.push(clothes[i]);
    let copy = [...clothes];
    copy.splice(i, 1);
    for (let z = count; z < copy.length; z++) {
      if (clothes[i][1] !== copy[z][1]) {
        arr.push([clothes[i], copy[z]]);
      }
    }
    count++;
  }
  // console.log(arr)

  let style = 0;
  for (let h = 0; h < arr.length; h++) {}
  return arr.length;
}
