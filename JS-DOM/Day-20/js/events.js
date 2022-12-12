console.log('events')

let myButton = document.getElementById('myButton');

console.log(myButton);


let color = 'green';

function changeBackgroundColor () {
    console.log('clicked')
    if (color === 'green') {
        myButton.style = `background-color: green`
        color='white';
    } else {
        myButton.style = `background-color: white`
        color='green';
    }
}
myButton.style = `background-color: ${color}`;
function changeColors(){
    console.log('clicked');
    if(color === 'green') {
        myButton.style = `background-color: ${color}`;
        color = 'white';
    } else {
        myButton.style = `background-color: ${color}`;
        color = 'green';
    }
}

// myButton.addEventListener("click", changeColors);


let arrowFunc = () => {

}

myButton.addEventListener('click',() => {
    myButton.style = 'background-color: red;'
} )


let registerButton = document.querySelector('#register');
console.log(registerButton);
registerButton.disabled = true;