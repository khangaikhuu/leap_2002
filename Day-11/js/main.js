// var baby = "Baby Shark, doo-doo, doo-doo";

// console.log(baby);

// console.log(baby);
// console.log(baby);
// console.log(baby);



// var a = "Baby Shark, ";
// var b = "doo-doo, ";
// var c = "doo-doo";
// var d = "Mommy Shark, ";

// console.log(a + b + c);
// console.log(a + b + c);
// console.log(a + b + c);


// let myNumber = 5;
// let undify;
// let nullVariable = null;
// let myDecision = true;

// // typeof
// console.log(typeof 1);
// console.log(typeof "Hello");
// console.log(typeof undify);
// console.log(typeof nullVariable);
// console.log(myDecision);
// console.log(typeof myDecision);

// /**
//  * alert gargana
//  * 
//  * x`2 + y`2 - z`3 / 240 * 175
//  */
// const PI = 3.14;
// let r = 45;
// let circleLength = 2 * PI * r;
// console.log(circleLength);

// let bottom = prompt('Please give me your bottom!');
// let test = prompt('Please give me your top!');
// let heigth = prompt('Please give me your heigth!');
// let trapezoidArea = (bottom + test )/ 2 * heigth;
// alert(trapezoidArea);

// let a = prompt('give a');
// let b = prompt('give b');

// if(a > b){
//     console.log('its true');
// } else {
//     console.log('its false');
// }


// const yearOfBirth = prompt('Give me your birth date');
// const currentYear = 2022;

// const old = currentYear - yearOfBirth;
// console.log(old);
// // old = 5

// if (0 <= old && old <= 1) {
//     console.log('infant');
// } else if(1 < old && old <= 3) {
//     console.log('toddler');
// }
// else if(3 < old && old <= 5) {
//     console.log('Preschool');
// }
// else if(5 < old && old <= 12) {
//     console.log('Gradeschooler');
// }
// else if(12 < old && old <= 18) {
//     console.log('Teen');
// }
// else if(18 < old && old <= 21) {
//     console.log('Young adult');
// } else {
//     console.log('Adult');
// }



// let isNotTrue = true;
// console.log(!isNotTrue)

let day = prompt('Give me your day');
console.log(typeof(day))

let dayNumber = Number(day);
console.log(dayNumber);
console.log(typeof(dayNumber));

let dayName;

if (day == 1) {
    dayName = 'Monday';
}

switch(dayNumber){
    case 1:
        dayName = 'Monday';
        break;
    default:
        dayName = 'Invalid day';
}

let result = null;

if (typeof(result) == null){
    console.log('Its null')
} else {
    console.log('Its undefined')
}

let input = prompt('data');

if (Number(input) == NaN ){
    alert('please give me a number');
} else {
    console.log(Number(input));
}