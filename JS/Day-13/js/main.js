// Day 13

console.log(Math.PI);
console.log(Math.PI.toFixed(2));

const budget = 1_000_000_000;
console.log(budget);

const degrees = 45;
let rad = degrees * (Math.PI / 180);
console.log(rad.toFixed(4))


let a = 5, b = 9;
const diff = Math.abs(a - b);
console.log(diff);

console.log(Math.ceil(.95));
// output: 1

console.log(Math.ceil(4));
// output: 4

console.log(Math.ceil(7.004));
// output: 8

console.log(Math.ceil(-7.004));
//output: -7


console.log(Math.floor(5.95));
// output: 5

console.log(Math.floor(5.05));
// output: 5

console.log(Math.floor(5));
// output: 5

console.log(Math.floor(-5.05));
// output: -6

console.log(Math.round(0.9));
// output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// output: -5 -5 -6

console.log(Math.max(1, 3, 2));
// output: 3

console.log(Math.max(-1, -3, -2));
// output: -1

console.log(Math.min(2, 3, 1));
// output: 1

console.log(Math.min(-2, -3, -1));
// output: -3

console.log(Math.pow(7, 3));
// output: 343
console.log(Math.sqrt(45));

// x2 = y2 + z2 => x => ? input: y = 15, z = 24

console.log(Math.ceil(Math.random() * 6))





// // random number between max and min
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));
// console.log(Math.floor(Math.random() * (max - min) + min));

// let first = prompt('Give me your minimum number');
// let second = prompt('Give me your second number');
// let howMany = prompt('How many times?')
// const max = Math.max(first, second);
// const min = Math.min(first, second);
// let count = 1;

// console.log('loop starts')
// while (count <= Number(howMany)) {
//     console.log(Math.floor(Math.random() * (max - min) + min));
//     count = count + 1;
// }

// console.log('loop ended')
/**
 * Хэрвээ бид нар count = count + 1 гэдгийг бичихгүй бол 
 * INFINITE(forever) LOOP гэдэг зүйлтэй тулгарна
 */

// let answer = "yes";

// while(answer == "yes") {
//     answer = prompt('Do you wanna continue the game?').toLowerCase();
//     if (answer == 'yes' ) {
//         alert('Thanks');
//     }
// }

// console.log('game over');



let max = Number(prompt('Give me a number')); // 40
let count = 1;
let sum = 0;

while (count <= max) {
    // console.log(count);
    count = count + 1; // 8
    sum = sum + count; // 18 + 8 = 26
    console.log(count); // 8
    console.log(sum) // 26
}

// max = 10, count = 0, sum = 0
// iteration 1: count = 1
count = count + 1; // 1
sum = sum + count; // 0 + 1 = 1
console.log(count); // 1
console.log(sum) // 1

// iteration 1: count = 2
count = count + 1; // 2
sum = sum + count; // 1 + 2 = 3
console.log(count); // 3
console.log(sum) // 3