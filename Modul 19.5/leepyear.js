
// get Leep Year

// function getLeepYear(year) {
//     if ((year % 4) == 0 && (year % 100) != 0 || (year % 400) == 0) {
//         return year + "is Leep Year";
//     } else {
//         return year + " is not Leep Year";
//     }
// }
function getLeepYear(year) {
    if (new Date(year, 1, 29).getDate() == 29) {
        return year + " is Leep Year";
    } else {
        return year + " is not Leep Year";
    }
}

let LeepYear = getLeepYear(2020);
console.log(LeepYear);