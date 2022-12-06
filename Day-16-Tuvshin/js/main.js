console.log('Date and Functions')

let now = new Date(); 
console.log( now );

let startPCTIme = new Date(0);
console.log(startPCTIme);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

let date = new Date("2017-01-26");
console.log(date);


// тухайн цагыг бүсийн одоогын цаг
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getSeconds());

// assignment өнөөдрөөс эхлээд 12 сарын 31 ны хүртэл 
// хэдэн өдөр, хэдэн цаг, хэдэн минут байгааг олно уу
let tuesday = new Date();
console.log(tuesday);
let lastDayOf2022 = new Date("2022-12-31");
console.log(lastDayOf2022);
console.log(tuesday.getDate());

// Өнөөдрөөс шинэ он гартал тэдэн өдөр тэдэн цаг тэдэн минут байна
console.log(`Өнөөдрөөс шинэ он гартал тэдэн өдөр тэдэн цаг тэдэн минут байна`);
