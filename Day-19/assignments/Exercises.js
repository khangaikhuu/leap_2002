console.log('Object exercises')


function howDoesTheFoxSay(array, animalType) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].type === animalType) { // animalType болон array элементийн type харьцуулах
            console.log(`${array[i].sound}-${array[i].sound}-${array[i].sound}`)
        }
    }
}




let animals = [
    {
        type: 'dog',
        sound: 'woof'
    },
    {
        type: "cow",
        sound: "moo"
    },
    {
        type: "cat",
        sound: "meow"
    }
]
console.log('DOG barking')
howDoesTheFoxSay(animals, 'dog'); // Woof-Woof-Woof
console.log('COW mooing')
howDoesTheFoxSay(animals, 'cow'); // moo-moo-moo
console.log('CAT meowing')
howDoesTheFoxSay(animals, 'cat'); // meow-meow-meow



function findOlderStudents(array){

}


const students = [
    {
        name: 'Khangai',
        birthOfYear: 1982,
        hobby: 'karate',
        single: false
    },
    {
        name: 'Dolgor',
        birthOfYear: 2004,
        hobby: 'cycling',
        single: true
    },
    {
        name: 'margad',
        birthOfYear:1996,
        hobby: 'yoga',
        single: false
    },
]

findOlderStudents(students)// Khangai, margad

let age = 20;
if(age < 20) {
    console.log('too young')
} else {
    console.log('too old')
}

age < 20 ? console.log('too young') :  console.log('too old');