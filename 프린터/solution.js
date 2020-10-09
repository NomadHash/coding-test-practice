function solution(priorities, location) {
  let newList = [];
  let specialList = {};
  let sortList = [...priorities].sort((a, b) => {
    return b - a;
  });
  let count = 0;

  for (let i = 0; i < priorities.length; i++) {
    newList.push({ [priorities[i]]: i });
    if (i === location) {
      specialList = { [priorities[i]]: i };
    }
  }
  while (newList !== []) {
    if (Object.keys(newList[0])[0] !== String(sortList[0])) {
      newList.push(newList.shift());
    } else {
      if (Object.values(newList.shift())[0] === Object.values(specialList)[0]) {
        count++;
        break;
      } else {
        count++;
      }
      sortList.shift();
    }
  }

  return count;
}
