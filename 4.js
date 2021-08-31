const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]

let min = Math.min(...grades);
let max = Math.max(...grades);
let Range = max-min;

let gradesSort = grades.sort();
let middleNumber = gradesSort[grades.length/2]
let middleNumberMinus1 = gradesSort[Math.floor((grades.length-1)/2)];
function median(array){
    return (middleNumberMinus1 + middleNumber)/2
}

let secondHalfGrades = gradesSort.slice(4, 9);
let min2 = Math.min(...secondHalfGrades);
let max2 = Math.max(...secondHalfGrades);
let range2 = max2 - min2;

console.log("The range is: " + Range);
console.log("The median grade is: " + median(grades));
console.log("The second half range is: "+ range2);