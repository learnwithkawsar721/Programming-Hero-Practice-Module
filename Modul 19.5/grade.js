
// grade 

function getGrade(num) {
    if (num >= 85) {
        return "A+";
    }
    else if (num >= 75) {
        return "A";
    }
    else if (num >= 65) {
        return "A-";
    }
    else if (num >= 59) {
        return "B";
    } else if (num >= 55) {
        return "B-";
    } else if (num >= 50) {
        return "C";
    } else if (num >= 40) {
        return "C-";
    } else if (num >= 33) {
        return "D";
    }
    else {
        return "F"
    }
}

// Bangla

let bangla = getGrade(99);
console.log(bangla);

// english
let english = getGrade(80);
console.log(english);
// math

let math = getGrade(74);
console.log(math);
// Bangla

let phi = getGrade(68);
console.log(phi);
// Bangla

let chemi = getGrade(55);
console.log(chemi);
// Bangla

let drow = getGrade(41);
console.log(drow);
// Bangla

let ict = getGrade(32);
console.log(ict);
