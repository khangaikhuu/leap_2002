console.log('bom js')
console.log(window);
// window.alert('Hello')

// window.open('https://google.com', 'Hello');

// let result = window.confirm('Do you wanna to Quit?');
// console.log(result);


let alertButton = document.getElementById('alertButton');
let cancelButton = document.getElementById('cancelButton');
let timeoutID;


alertButton.addEventListener('click', () => {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
});

cancelButton.addEventListener('click', () => {
    console.log(timeoutID);
    window.clearTimeout(timeoutID);
})
console.log(timeoutID);

setTimeout(()=> {
    console.log('Time out is running');
}, 5000)

let counter = 0;

let startMyTimer = document.getElementById('startTimer');
startMyTimer.addEventListener('click', runTimerInterval)

function runTimerInterval () {
    window.setInterval(startInterval, 1000);
}

function startInterval(){
    let now = new Date();
    let myTimer = document.getElementById('myTimer');
    myTimer.innerHTML = now.getSeconds();
}