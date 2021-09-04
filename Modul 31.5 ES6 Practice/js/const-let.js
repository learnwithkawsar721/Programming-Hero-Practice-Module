/*
    Const variable এর মান একবার assignt করা যায়  যেমনঃ-
    যদি আবার Assign করি তাহলে Error দিবে TypeError: Assignment to constant variable.
*/
const myName = "kawsar";
// myName = "Mafuja";
// console.log(myName);
/* 
    Let variable এর মান বারবার reAssign করা যায় 
*/
let friend = "Mafuja";
// console.log(friend);

const profile ={name:"kawsar",roll:924635,subject:"Computer"}
const { roll, subject } = profile;
const templetString = `My name is ${myName}. My friend's name is ${friend}. I study in the ${subject} department. My roll is ${roll}.`;
console.log(templetString);


/* 
Arrow Function
 */


const divition = number => number / 5;

console.log(divition(20));

const multiply = (num1, num2) => {
    const first = num1 + 2;
    const second = num2 + 2;
    const result = first * second;
    return result;
}

console.log(multiply(2, 3));

const threemultiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(threemultiply(2, 2, 2));


const oldArray = [2, 4, 6, 7, 20];

const result = oldArray.map(x => x * 5);
console.log(result);

const myArry = [1, 3, 5, 4, 7, 8, 9, 10];

const odd = myArry.filter(x => x % 2);
console.log(odd);

const laptops = [
    {name:'asus',price:5000,status=1},
    {name:'lanevo',price:6000,status=2},
    {name:'samsung',price:3000,status=1},
    {name:'Dell',price:8000,status=2},
]

// const mylaptop = laptops.find(x => x.price == 5000);
const total = laptops.reduce((sum, item) => item.status,0);
console.log(total);


const array = [1, 2, 3, 4, 5];
const total = array.reduce((sum, item) => sum += item, 0);
console.log(total);

/* Default Function */
const defaultFunction = (num1, num2, num3 = 7) => num1 + num2 + num3;
console.log(defaultFunction(5, 5));

/* Nested Object */

const nestedObject = {
    name: "kawsar",
    age: 22,
    address: {
        city: 'myMenshingh',
        state: 'mymensingh',
        post:2220
    }
}

// const { name, age } = nestedObject;
// const { city, state, post }= nestedObject.address;
// console.log(name, age, city, state, post);
console.log(nestedObject?.name?.age?.address);