function pow(number, exponent) {
    let multiply = 1;
    for(let i = 1; i <= exponent; i++){
        multiply = multiply * number;
    }

    return multiply;
}

let result =pow(2, 3);

console.log(result);
console.log(pow(2, 4));
console.log(pow(5, 2));

console.log(Math.pow(4, 3));
console.log(pow(4, 3));


function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

let myArray = [1, 2, 3, 5, 6, 100, 23]
printArray(myArray);


// 3. 
console.log('Ex 03 begins')
let findArrayMax = function (arr) {
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if (max <= arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(Infinity)
console.log(findArrayMax(myArray)) // =>  6

// 4.
console.log('Ex 04 begins')

let findArrayAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    const average = sum / arr.length;
    // i need average
    return average;
}

console.log(findArrayAverage(myArray));
Math.pow(3, 4)


// 

function findOntsDumd(points) {
    debugger;
    if(points < 60) {
        return "Very bad";
    } else if(points >= 60 && points<70) {
        return 'Satisfied'
    } else if (points >= 70 && points<80) {
        return "Average";
    } else if (points >= 80 && points < 90) {
        return "Good";
    } else if(points >= 90 && points <= 100) {
        return "Very good"
    } else {
        return "Please give me points between 0 and 100";
    }
}
// let inputPoint = Number(prompt('Give me student point'));
// let inputStudentName = prompt('Give me student name');
// let pointResult = findOntsDumd(inputPoint);

// console.log(`${inputStudentName} - ${inputPoint} - ${pointResult}`)