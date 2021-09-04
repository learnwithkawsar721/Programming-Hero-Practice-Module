
let numbers = [10, 10, 100, 1410, 10, 10, 10];
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
console.log(sum);
}

arrayTotal(numbers);
