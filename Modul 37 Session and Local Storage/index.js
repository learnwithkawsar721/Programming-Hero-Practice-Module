//globel Variable
const ul = document.getElementById('products');
const addItem = () => {
    const productField = document.getElementById('product-name');
    const product = productField.value;
    if (!product) {
        return;
    }
    // display item
    displayItem(product);
    // add to Local Storage
    addproductToCart(product);
    productField.value = '';
}

const displayCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayItem(name);
    }
}

const displayItem = name => {
    const li = document.createElement('li');
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }

    li.innerText = name;
    ul.appendChild(li);

}
// getCart function
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    cart ? cartObj = JSON.parse(cart) : cartObj = {};
    return cartObj;
}
// clear Cart function 
const clearCart = () => {
    localStorage.removeItem('cart');
}
const addproductToCart = name => {
    const cart = getCart();
    cart[name] ? cart[name] = cart[name] + 1 : cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// placeOrder 
const pleceOrder = () => {
    ul.textContent = '';
    clearCart();
}
// call display Cart show 
displayCart();