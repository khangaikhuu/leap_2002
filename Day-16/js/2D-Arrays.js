/**
 * Problem 
 * 
 * Example-1 : Battleship
 * 
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * | 0 | 0 | 0 | X | X | X | 0 |
 * 
 * Example - 2: Tic Tac Toe
 * 
 * |col1| col2| col3 |
 * 
 * | x  |  o  |   x  | => row1
 * | o  |  o  |   x  | => row2
 * | x  |  x  |   o  | => row3
 * 
 * 
 */

let row1 = ['x', 'o', 'x'];
let row2 = ['o', 'o', 'x'];
let row3 = ['x', 'x', 'o'];
console.log(row1);
console.log(row2);
console.log(row3);

let tictactoe = [['x', 'o', 'x'], ['o', 'o', 'x'], ['x', 'x', 'o'] ];
console.log(tictactoe);
console.log(tictactoe[1])
console.log(tictactoe[1][1])

console.log('for loop with for loop')
// tictactoe-ийн бүх мөрний элементүүдийг хэвлэж харуулна уу
for(let i = 0; i < tictactoe.length; i++) {
    // console.log(tictactoe[i]);
    // double FOR loops
    for(let j = 0; j < tictactoe[i].length; j++) {
        console.log(tictactoe[i][j]);
    }
}








