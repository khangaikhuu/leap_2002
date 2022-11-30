// let a = "hi";
// let b = "hi";

// console.log(a < b);

// console.log(a == b);

// console.log(a === b);

// let c = 10;
// let d = '10';
// console.log(c == d);
// console.log(c === d);
// console.log(c !== d);


// let e = true;
// let f = false;

// console.log(e < f);
// console.log(e > f);

// let result = 10;

// if (result > 10) {
//     console.log('more than 10');
// } else {
//     console.log('less than 10');
// }

// result > 10 ? (result < 11 ? console.log('test') : console.log('hi')) : console.log('less than 10');

// // 3000, 27500, 100000
// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;

// if (5000 >= tip1 && 30000 <= tip1) {
//     console.log('bodlogo bodoh 15%');
// } else {
//     console.log('busad bodoh 20%');
// }

// let tipResult2 = (5000 >= tip2 && 30000 <= tip2) ? tip2 * 0.15 + tip2 : tip2 * 0.2 + tip2;
// console.log(tipResult2);

// const input = prompt('Give me your money');
// const numberInput = Number(input);
// // const numberInputPrompt = Number(prompt('Give me your money'));

// let exTipResult = (5000 <= numberInput && 30000 >= numberInput) ? numberInput * 0.15 + numberInput : numberInput * 0.2 + numberInput;
// alert(exTipResult);

// // Onts dumd is bad in his lessons

// const studentPoint = Number(prompt('Give me your score'));
// const studentName = prompt('Give me your student name');

// let studentResult = 'Оноо дандаа 100-аас доош байх ёстой';

// if (studentPoint < 60) {
//     studentResult =  'Маш муу'
// } else if (studentPoint >= 60 && studentPoint < 70) {
//     studentResult = 'Хангалттай'
// }
// else if (studentPoint >= 70 && studentPoint < 80) {
//     studentResult = 'Дунд'
// }
// else if (studentPoint >= 80 && studentPoint < 90) {
//     studentResult = 'Сайн'
// }
// else if (studentPoint >= 90 && studentPoint < 100) {
//     studentResult = 'Маш сайн'
// }
// else {
//     console.log('buruu')
// }


// alert(studentName + ' - ' + studentPoint + ' - ' + studentResult);


// console.log(`${studentName} - ${studentPoint} - ${studentResult}`);


// alert ("Lorem Ipsum \"Its double quotation\" is simply dummy text of the printing and typesetting industry. \n\n \t Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

// console.log('its log');
// console.error('it is error');

// const str = "Life, the universe and everything";
// console.log(str.length)

const registerNumber = prompt('Give me your register number');

// if (registerNumber.length != 10){
//     alert('The Register number length is not correct');
// } else {
//     alert('The length of register number is correct');
// }

// .charAt(index) str[index]
// console.log(str.charAt(0));
// console.log(str[1]);

// console.log(registerNumber.charAt(0));
// console.log(registerNumber[1]);

// console.log(str.substr(0, 5))



const registerChar = registerNumber.substr(0, 2);
const registerNum = registerNumber.substr(2, 9);
// console.log(registerChar);
// console.log(Number(registerChar));
// console.log(Number('ABC'));



if (!Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
    console.log('Your register characters are correct ')
} else {
    console.log('Your register characters are wrong')
}



console.log(Number('abc'));
console.log(Number.isInteger(Number('abc')));
console.log(Number('12312345'));
console.log(Number.isInteger(Number('12312345')))

/**
 *  exercise: Өгөгдсөн регистрийн дугаарын урт нь 10 тэгээд эхний 2 үсэг нь 
 * үсэг болоод үлдсэн 8 үсэгнүүд нь тоон төрөлтэй бол Таны өгсөн регистрийн дугаар буруу байна
 * Хэрвээ бүх нөхцөл хангагдаж байвал Таны өгсөн регистрийн дугаар зөв байна гэж хэвлэнэ үү.
 *  */

