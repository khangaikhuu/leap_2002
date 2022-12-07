console.log('arrays methods')

// array at function


function findAt (arr, index) {
    return arr[index];
}

const array1 = [1, 2, 3 , 4, 5];
console.log(findAt(array1, 0));
console.log(findAt(array1, 4));

console.log(array1.at(0))
console.log(array1.at(2))


// arr1 = [1, 2, 3] arr2 = [4, 5, 6] => [1, 2, 3, 4, 5, 6]
function arrConcat(arr1, arr2) {

    let concatedArray = []
 
    for(let i = 0; i < arr1.length; i++) {
        concatedArray.push(arr1[i])
    }
    for(let i = 0; i < arr2.length; i++) {
        concatedArray.push(arr2[i])
    }

    return concatedArray;
}

let arrayC1 = [1, 2, 3]
let arrayC2 = [4, 5, 6]
console.log(arrConcat(arrayC1, arrayC2));
console.log(arrConcat(arrayC2, arrayC1))

// array concat method
console.log('array concat method')
console.log(arrayC1.concat(arrayC2));
console.log(arrayC1 + arrayC2);

// arr1 = [1, 2, 3] arr2 = [4, 5, 6] => arr3 = [5, 7, 9]
// finding out sum of array elements
function arrayElementAdd(arr1, arr2) {
    let sum = []
    for(let i = 0; i < arr1.length; i++){
        sum[i] = arr1[i] + arr2[i] 
    }
    return sum;
}
console.log(arrayElementAdd(arrayC1, arrayC2))

// array includes
console.log('array includes')
// arr1 = [2, 4, 5] => 5 -> true, 2 => true, 3 =>false

let arrayIncludes = function (arr, number){
    let found = false;
    for(let i = 0; i < arr.length; i++) {
        if(number === arr[i]){
            found = true;
            break;
        }
    }
    return found;
}
const arrayInc = [2, 4, 5]
console.log(arrayIncludes(arrayInc, 2)); // true
console.log(arrayIncludes(arrayInc, 5)); // true
console.log(arrayIncludes(arrayInc, 3)); // false

// array implicit function includes
console.log('array builtin method includes')
console.log(arrayInc.includes(2));
console.log(arrayInc.includes(5));
console.log(arrayInc.includes(3));

// 



