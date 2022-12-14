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






// TODO APP
let todoCreate = document.getElementById('todo-create');

let button = document.getElementById('add');
console.log(button);

button.addEventListener('click', () => {
    console.log('add clicked')
    console.log(todoCreate.value);

});


let todoList = document.getElementById('todo-list');
console.log(todoList)

let p = document.createElement('p');
console.log(p)
p.textContent = 'First';

todoList.appendChild(p)
