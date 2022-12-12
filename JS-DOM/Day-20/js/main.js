console.log('Day - 20 - DOM')

document.getElementById("helloText").innerHTML = "Hello World!";
document.getElementsByClassName("dummy")[0].innerHTML = 'Hello Dummy!'
document.getElementsByClassName("dummy")[1].innerHTML = 'Hello Dummy Header!'
document.getElementsByClassName("dummy")[2].innerHTML = 'Hello Dummy Span!'

console.log(document.getElementsByClassName("dummy")[1]);