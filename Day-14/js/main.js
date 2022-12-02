console.log('Day 14')
console.log('find out even numbers from 1 to 10')

const MAX = 10;
let start = 1;

while(start <= MAX) {
    if (start % 2 == 0) {
        console.log(start);   
    }
    start = start + 1;
}

console.log('Print out all the odd numbers from 1 to 20')
const MIN = 20;
let minStart = 1;
while(minStart <= MIN) {
    if (minStart % 2 != 0) {
        console.log(minStart);   
    }
    minStart = minStart + 1;
}