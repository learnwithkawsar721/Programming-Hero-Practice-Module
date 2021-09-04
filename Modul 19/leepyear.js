
// function isLeepYear(year) {
//     if ((year % 4) == 0 && (year % 100) != 0 || (year % 400) == 0) {
//         console.log(year + "is a Leep Year");
//     } else {
//         console.log(year+ "is a not leep Year");
//     }
// }


// isLeepYear(2100);

function isLeepYears(year) {
    var leep = new Date(year, 1, 29).getDate() == 29;
    if (leep) {
        console.log(year + "is a Leep Years");
    }
    else {
        console.log(year + "is a not Leep Years");
    }
}

isLeepYears(2001);