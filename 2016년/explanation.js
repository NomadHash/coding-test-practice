function solution(a, b) {
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const year = new Date(`2016-${a}-${b}`);
    return day[year.getDay()]
};