let text = "Hello, I am Kawsar";

function reverseString(text) {
    
    let reverse = '';

    for (let letter of text) {
        reverse = letter + reverse;
    }
    console.log(reverse);
}

reverseString(text);