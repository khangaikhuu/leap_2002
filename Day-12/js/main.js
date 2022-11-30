let a = "hi";
let b = "hi";

console.log(a < b);

console.log(a == b);

console.log(a === b);

let c = 10;
let d = '10';
console.log(c == d);
console.log(c === d);
console.log(c !== d);


let e = true;
let f = false;

console.log(e < f);
console.log(e > f);

let result = 10;

if (result > 10) {
    console.log('more than 10');
} else {
    console.log('less than 10');
}

result > 10 ? (result < 11 ? console.log(test): console.log('hi')) : console.log('less than 10');
