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
let todoList = document.getElementById('todo-list');
console.log(todoList)

let button = document.getElementById('add');
console.log(button);

button.addEventListener('click', () => {
    console.log('add clicked')
    console.log(todoCreate.value);
    let input = document.createElement('p');
    input.innerHTML = `${todoCreate.value} <input value=${todoCreate.value} disabled> <button>Test</button>`;

    todoList.appendChild(input);
    todoList.appendChild('<p>Test</p>')
    

});




let p = document.createElement('p');
console.log(p)
p.textContent = 'First';

todoList.appendChild(p)
