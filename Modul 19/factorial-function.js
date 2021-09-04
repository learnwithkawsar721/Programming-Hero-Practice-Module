
function factorial(number) {
    
    let n = number;
    let fact = 1;
    let total = 0;
    for (let i = 1; i <= n; i++){
        fact *= i;
        total += fact;
    }
    return fact;
}

let fact = factorial(7);
console.log(fact);