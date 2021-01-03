const circle = require('./circle');
const myCircle = circle(4);

console.log(`지름이 4인 원의 면적 : ${myCircle.area()}`);
console.log(`지름이 4인 원의 둘레 : ${myCircle.circumference()}`);
