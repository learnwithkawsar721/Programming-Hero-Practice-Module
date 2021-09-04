
const products = [
    {name:"asus laptop",price:54000},
    {name:"asus watch",price:4400},
    {name:"asus phone",price:52000},
    {name:"xmi phone",price:15000},
    {name:"symponi laptop",price:1000},
]

function searchProduct(products, searchText) {
    
    let searchResult = [];
    for (let product of products) {
        let name = product.name;
        if (name.indexOf(searchText) != -1) {
            searchResult.push(product);
       }
    }
    return searchResult;
}


const search = searchProduct(products, 'laptop');

console.log(search);