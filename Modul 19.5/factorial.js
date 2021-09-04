// for loop increment
// function getfactorial(number) {
    
//     let fact = 1;
//     for (let i = 1; i <= number; i++){
//         // console.log(i);
//         fact *= i;
//     }
//     console.log(fact);
// }
// for loop decriment

// function getfactorial(number) {
//     let fact = 1;
//     for (let i = number; i >= 1; i--){
//         fact *= i;
//     }
//     console.log(fact);
// }


//while loop incriment

// function getfactorial(number) {
//     let fact = 1;
//     let i = 1;
//     while ( i <= number) {
//         fact *= i;
//         i++;
//     }
//     console.log(fact);
// }

// while loop decriment 

// function getfactorial(number) {
//     let fact = 1;
//     let i = number;
//     while (i >= 1) {
//         fact *= i;
//         i--;
//     }
//     console.log(fact);
// }

//recursive factorial 

function getfactorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * getfactorial(n-1);
}

let myFactorial = getfactorial(5);
console.log(myFactorial);