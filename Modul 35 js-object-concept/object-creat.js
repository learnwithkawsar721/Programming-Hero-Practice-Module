// 1. useing object litarel

const student = {
    name: 'kamal',
    job: 'cricketer'
}
// 2. constructor
const person = new Object();

// 3. create object
// const human = Object.create(null);
const human = Object.create(student);

// 4. class  object

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('manush', 23);

// functional object

function Manush(name) {
    this.name = name;
}
const man = new Manush('kawsar');
console.log(man);