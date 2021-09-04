
function oddEven(number) {
    if (number % 2 == 0) {
        return number + " is a Event Number";
    } else {
        return number + " is a Odd Number";
    }
}

let oddEvent = oddEven(2);

console.log(oddEvent);