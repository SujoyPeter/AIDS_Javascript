var DT = new Date();
var now = DT.getTime();
var day = DT.getDay();
DT.setDate(1);
DT.setMonth(1, 29)
DT.setFullYear(2024)
// DT.setFullYear(2001, 1, 14);
var data = DT.toLocaleString();

console.log(DT);
console.log(data);