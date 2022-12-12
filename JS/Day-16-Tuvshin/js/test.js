
function pow(number, exponent) {
    let multiply = number;
    for(let i = 1; i <= exponent; i++){
        multiply = multiply * number;
    }

    return multiply;
}

pow(2, 3);

