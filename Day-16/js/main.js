

let numbers = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8];
console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        numbers[i] = numbers[i] + 4;
    } else {
        numbers[i] = numbers[i] - 5;
    }
}
console.log(numbers);

