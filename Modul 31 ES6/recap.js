// let and const

const habby = "kawsar";
let phone = "redmy node9";

phone = "Samsung Galaxy s10";

// console.log(phone);

//Templet String

const mynotes = "my name is kawsar" +
    "I am from Bangladesh" +
    "I can do it";
const name = "kawsar";
const age = 22;
const myNotes2 = `My Name is ${name}. I am ${age} Old.`
    // console.log(myNotes2);

// default perameter

function maxNumber(array =[]) {
    const max = Math.max(...array);
    return max;
}
const max = maxNumber();
console.log(max);

