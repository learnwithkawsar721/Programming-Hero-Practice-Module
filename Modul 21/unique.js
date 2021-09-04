

let names = ['kawsar', 'tusher', 'tuhin', 'masud', 'foysal', 'zaman', 'kawsar', 'masud', 'samiul', 'kader', 'kasem', 'atikul', 'mafuja', 'marufa'];

function uniqueNames(names) {
    let unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

let uniqueName = uniqueNames(names);
console.log(uniqueName);