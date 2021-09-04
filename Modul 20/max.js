
const business = 1250;
const minister = 1650;
const rab = 500;

/* if (business > minister && business > rab) {
    console.log("Business man is Bigger");
}
else if (minister > business && minister > rab) {
    console.log("Minister man is Bigger");
}
else {
    console.log("Rab man is Bigger");
} */

// let max = Math.max(business, minister, rab);
// console.log("Bigger number is : "+ max);

// A program to find the big number between two numbers

function findTwoLarge(first, second) {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}

let largeTwoNumber = findTwoLarge(1350, 456);
// console.log(largeTwoNumber);

function findThreeLarge(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

let findMax = findThreeLarge(120, 130, 140);

// console.log(findMax);

function findTwoMin(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

let findMin = findTwoMin(300, 40);
// console.log(findMin);

function findThreeMin(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}

let findThreeMinNumber = findThreeMin(100, 200, 30);

console.log(findThreeMinNumber);