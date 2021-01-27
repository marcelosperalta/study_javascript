// How to run: *********** //
// npm install -g nodemon  //
// nodemon edabit.js       //
// *********************** //

// Edabit
// https://edabit.com/

// Challenges
// JavaScript

// Easy:

console.log(`
Challenges 
JavaScript 
Easy
`);

// Sort Numbers in Descending Order
// https://edabit.com/challenge/yaXQvCzAXJLe37Qie

function sortDescending(num) {
    if (num >= 0) {
        return parseInt(num.toString().split("").sort(function(a, b){return b - a}).join(""));
    } else {
        return 'Only positive numbers are allowed';
    }
}
console.log(sortDescending(123));        // expected output: 321
console.log(sortDescending(1254859723)); // expected output: 9875543221
console.log(sortDescending(73065));      // expected output: 76530
console.log(sortDescending(-1));         // expected output: Only positive numbers are allowed

console.log(`--------------------------------------------`);


// 


console.log(`--------------------------------------------`);


// 


console.log(`--------------------------------------------`);


// 