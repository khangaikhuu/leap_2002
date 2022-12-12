console.log('day 15 - array');
let F1 = 'Lio';
let F2 = 'Kou';
let F3 = 'Gir';
let F4 = 'Var';
let F5 = 'Upa';
let F6 = 'Her';
let F7 = 'Tch';
let F8 = 'Rab';
let F9 = 'Dem';
let F10 = 'Gri';
let F11 = 'Mba';

console.log(F3);
F4 = 'Par';
console.log(F4);

let frenchPlayers = ['Lio', 'Kou', 'Kou',  'Kou', 'Kou', 'Kou', 'Kou', 'Kou', 'Kou', 'Kou', 'Kou', 'Var' ]
console.log(frenchPlayers);
console.log(frenchPlayers[1]);

frenchPlayers[1] = 'Par';
console.log(frenchPlayers);

let polishPlayers = ['Lew', 'Fra', ]
console.log(polishPlayers);

// Lio
// Kou
// use FOR loop

// for (let i = 0; i < frenchPlayers.length; i++){
//     console.log(frenchPlayers[i]);
// }


// Initial state of array is : [1, 2, 3, 5, 10, 11, 3, 5, 8]
// Using of FOR loop, if number is even, then print out the number
// Өгөгдсөн нь [1, 2, 3, 5, 10, 11, 3, 5, 8]
// Хэрвээ тухайн array-н утга нь тэгш тоо байвал тухайн тоог хэвлэнэ үү
// Жишээ нь: 2, 10, 8
let evenNumbers = [1, 2, 3, 5, 10, 11, 3, 5, 8];
for (let i = 0; i < evenNumbers.length; i++) {
    // console.log(evenNumbers[i])
    if(evenNumbers[i] % 2 == 0) {
        console.log(evenNumbers[i])
    }

}

// initial state of array is : [1, 2, 3, 5, 10, 11, 3, 5, 8]
// using of FOR loop, add to all numbers 4
// Output: [5, 6, 7, 9, 15, 7, 9, 12]
console.log(evenNumbers);
for (let i = 0; i < evenNumbers.length; i++) {
    //count = count + 1;
    evenNumbers[i] = evenNumbers[i] + 4;
}
console.log(evenNumbers);

// Өгөгдсөн нь [1, 2, 3, 5, 10, 11, 3, 5, 8]
// Энэхүү өгөгдсөн array-н утгуудын нийлбэрийг олоод хэвлэж харуулна уу
// FOR loop ашиглана
// 


// for loop ашиглаад өгөгдсөн array-н утгуудыг эсрэгээр нь болгож харуулна уу
// Жишээ нь: [1, 2, 4, 5, 6] => [6, 5, 4, 2, 1]


// for loop ашиглаад тухайн array дотор байгаа утгууд нь prime number мөн эсэхийг 
// шалгана уу 
// Жишээ нь: [1, 4, 3, 5] => Yes, No, Yes, Yes


/// * | * | *
/// * | * | *
/// * | * | *

/// If user gives an input: 1, 1


let tictactoe = [["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]]
let output = ''
for (let i = 0; i < tictactoe.length; i++) {
    for(let k = 0; k < tictactoe.length; k++) {
        output += "______";
    }
     
    if (i < tictactoe.length - 1) {
        output += '\n';
    }
    for(let j = 0; j < tictactoe[i].length; j++) {

        output = output + " | " +  tictactoe[i][j] + " |";
        if (j == tictactoe[i].length -1) {
            output = output + '\n';    

        }
    }  
} 

console.log(output)
