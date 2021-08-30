const num = 123;
let sum = 0;

let units = num%10;
let tens = Math.floor(num/10)%10;
let hundred = Math.floor(num/100);
sum = units + tens + hundred;

console.log(sum);