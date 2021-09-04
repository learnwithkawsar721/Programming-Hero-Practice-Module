
const products = [
    'asus black laptop',
    'LG phone',
    'asus yellow brand Laptop',
    'lanavo supar laptop',
    'Htc low price Phone',
];
const search = 'asus';
const output = [];
//indexOf
for (const product of products) {
    if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// inpludes
for (const product of products) {
    if (product.toLowerCase().includes(search.toLowerCase())) {
        // output.push(product);
    }
}

// Startwith

for (const product of products) {
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);