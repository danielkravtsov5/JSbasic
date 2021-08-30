const a = 1; b = 5; c = 6;
let solutionA = solutionB = 0

solutionA = ((-b)+(Math.sqrt((b*b)-(4*a*c))))/(2*a) ;
solutionB = ((-b)-(Math.sqrt((b*b)-(4*a*c))))/(2*a) ;

console.log(solutionA, solutionB);