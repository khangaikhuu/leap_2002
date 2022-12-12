console.log('Array methods')

// shift

// arr1 = [1, 2, 3] => // shift(arr1) => [2, 3]

let shiftArr = (arr) => {
    let tempArray = []
    for (let i = 0; i < arr.length; i++){
        if(i != 0){
            tempArray.push(arr[i])
        }
    }
    return tempArray;
} 

let arr1 = [1, 2, 3]

console.log(shiftArr(arr1)); // [2, 3, 5, 6]
console.log('array shift method');

const arr = [1, 2, 3];
const firstElement = arr.shift();
console.log(arr) // [2, 3]
console.log(firstElement);

console.log('Unshift array algorithm')

let unshiftArray = function (arr, number) {
    let tempArray = [];
    tempArray.push(number);

    for(let i = 0; i < arr.length; i++){
        tempArray.push(arr[i])
    }

    return tempArray;
}

let arr2 = [5, 6, 7];
console.log(unshiftArray(arr2, 6)); // [1, 5, 6, 7];

console.log('array unshift method')
const array1 = [1, 2, 3];
console.log(array1.unshift(4)); // 5
console.log(array1)


let sortArray = [1, 2, 8, 7, -1, 10];
let max = -9999;
console.log(sortArray);
let temp = sortArray[0];
sortArray[0] = sortArray[4];
sortArray[4] = temp;
console.log(sortArray);

sortArray = [1, 2, 8, 7, -1, 10];
console.log('sorting array')
console.log(sortArray);
function sortingAlgorithm(arr){
    for (let i = 0; i <= arr.length - 2; i++){
        let indexMin = i;
        for(let j = i+1; j < arr.length - 1; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        let temp = arr[i]
        arr[i] = arr[indexMin];
        arr[indexMin] = temp;
    }
    return arr;
    
}
console.log('testing')
// sortArray = [1, 2, 8, 7, -1, 10];
// iteration i = 0 / [-1, 2, 8, 7, 1, 10] - swap hiisen
// iteration i = 1 / [-1, 1, 8, 7, 2, 10] - swap hiisen
// iteration i = 2 / [-1, 1, 2, 7, 8, 10] - swap hiisen
// iteration i = 3 / [-1, 1, 2, 7, 8, 10] - swap hiigegui
// iteration i = 4 / [-1, 1, 2, 7, 8, 10] - swap hiigegui
// iteration i = 5 / [-1, 1, 2, 7, 8, 10] - swap hiigegui
console.log(sortingAlgorithm(sortArray)) // [-1, 1, 2, 7, 8, 10]

console.log('array sorting');
const names = ['Marlaa', 'Javkhaa', 'Javkhlan', 'Dorj'];
names.sort();
console.log(names);

console.log('array reverse');
function arrayReverse(arr) {
    let tempArray = [];
    for(let i = arr.length - 1; i >= 0;  i--) {
        tempArray.push(arr[i]);
    }
    return tempArray;
}

let arrReverse = [4, 5, 1, 8]
console.log(arrayReverse(arrReverse)); // [8, 1, 5, 4]

const numbers = ['one', 'two', 'three'];
console.log('array1:', numbers);
const reversed = numbers.reverse();
console.log('reversed:', reversed);


const nameSlice = ['bat', 'dorj', 'purev', 'davaa', 'tomor'];
console.log(nameSlice.slice(2));
console.log(nameSlice);

function nameSliceFunc (arr, index) {
    // let tempArray = []
    // for(let i = index; i < arr.length; i++){
    //     tempArray.push(arr[i]);
    // }
    // return tempArray;
    for(let i = 0; i < index; i++) {
        arr.shift()
    }
    return arr;
}

console.log(nameSliceFunc([1, 2, 3, 4, 5], 3)) // [4, 5]
console.log('splice method')

const spliceNames = ['Davaa', 'Lkhagva', 'Purev', 'Byamba'];
spliceNames.splice(1, 0, 'Myagmar');
// 1 дэх индекс дээр шинээр утга нэмэх үйлдэл
console.log(spliceNames);
// add "baasan" to the position between "purev" and 'byamba'
