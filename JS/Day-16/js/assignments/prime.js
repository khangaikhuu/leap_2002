console.log('prime number algorithm')

let input = Number(prompt("Give me your prime number"));
let temp = 0;

for (let i = 2; i < Math.round(input/2); i++) {
    if (input % i == 1){
        temp = temp + 1;
    }
}

console.log(temp);
if (temp == 0) {
    console.log("its prime number")
} else {
    console.log('its a not prime number')
}


