console.log('Day - 22')

// add function

function add(x, y) {
    return x + y;
}

// print function

function print(f){
    let x = 3, y =2;
    console.log(f(x, y));
}

// callback function
print(add);


// setTimeout

let x = () => {
    console.log('arrow function')
}



setTimeout ()