

// let n = 3;
// let factorial = 1;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//     // console.log(i);
//     factorial *= i;
//     total += factorial;
// }
// console.log(total);

function reverseFactorial(number) {
    let i = number;
    let fact = 1;
    while (i >= 1) {
        fact = fact* i;
        i--;
    }
    return fact;
}

let fact = reverseFactorial(3);

console.log(fact);