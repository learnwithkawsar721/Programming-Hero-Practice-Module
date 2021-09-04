

function factorial(n) {
    
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);


}


let myFactorial = factorial(7);

console.log(myFactorial);