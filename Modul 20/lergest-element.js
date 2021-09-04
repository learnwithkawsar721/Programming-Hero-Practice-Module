

function lergestElement(numbers) {
    let lergest = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if (element < lergest) {
            lergest =element;
        }
    }
    console.log(lergest);
}

let ages = [1,10,30,500];

let oldes = lergestElement(ages);