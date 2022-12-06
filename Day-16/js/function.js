console.log('my function')

// function declaration - функцыг тодорхойлох
function f (){
    console.log('Hello functions');
}

// function call - функцыг дуудах
f();

// 1.

/**
 * f(x) = x * x => x is parameter буюу функцын гаднаас авдаг хувьсагч
 */
function f1 (x) {
    console.log(x * x);
}

f1(5);

// 2. f(x,y) = (x+y)`2

function f2 (x, y) {
    console.log(Math.pow(x + y, 2))
}

f2(2,2);
f2(3,3);
f2(2,3);

// 3. E = mc2
function E(m, c) {
    console.log(m * Math.pow(c, 2));
}
const C = 300000;
Math.cos()
E(78, C);
E(68, C);

// 4. f(x) = x!
function factorial(x) {
    let multiplication = 1;
    for(let i=1; i <=x; i++) {
        multiplication = multiplication * i;
    }
    console.log(multiplication)
}

factorial(5)





