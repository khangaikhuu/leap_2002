console.log('functions')
//1 . f(x, y) = x`2 + y`2
function f1(x, y) {
    console.log(Math.pow(x, 2) + Math.pow(y, 2));
}
// calling the f1 function
f1(3, 4);
console.log(Math.E)


//17. factorial
// f(x) = x! => f(5) = 1 * 2 * 3 * 4 * 5;

function factorial(x) {
    let multiplication = 1;
    for (let i = 1; i <= x; i++) {
        multiplication = multiplication * i;
    }
    console.log(multiplication);
}

factorial(5);


function myFunction(p1, p2) {
    const sum = p1 + p2;
    return sum;
}

console.log(myFunction(2, 3));

/// find out the even number

function isEven(number) {
    let result = '';
    if(number % 2 == 0) {
        result = 'its even number';
    } else {
        result = 'its odd number';
    }
    return result;
}

console.log(isEven(5));
isEven(4);
isEven(18);
//...

// assignment
// 2 өгөгдсөн тооны хамгийн ихийг нь олоод буцаадаг функц бичнэ үү
// findMax

function findMax(a, b){
    if(a > b){
        return a;
    }  
    else {
        return b;
    }
}

console.log(findMax(1, 3));
console.log(findMax(100, 3));
console.log(findMax(100, 100));

function count10(x) {
    for (let i = 1; i <= x; i++) {
        console.log(i);        
    }
}

// count10(Number(prompt('Give me number')));

// // get inputs from prompt and 
// const num1 = Number(prompt('Give me your first number'))  
// const num2 = Number(prompt('Give me your second number'))

// const result = findMax(num1, num2);
// console.log(result);

// count10(100);

let max = -1000;
const arr = [1, 2, 10, 254, -19];

let arrayMax = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (max <= array[index]) {
            max = array[index];
        }
    }
}

arrayMax(arr)

console.log(max);