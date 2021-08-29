const num = 123;
let sum = 0;

let x = num%10;
let y = Math.floor(num/10)%10;
let z = Math.floor(num/100);
sum = x + y + z;

console.log(sum);