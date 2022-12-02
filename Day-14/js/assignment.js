// console.log(Math.floor(123/100))



let sum = 0, rem = 0, N = Number(prompt('Give me your number'))

for( ; N > 0 ;  N = Math.floor(N / 10)){
    rem = N % 10;
    sum = sum + rem;
   
}

console.log(sum);


for (let count =0; count < 100; count= count + 1){
    console.log(count);
}