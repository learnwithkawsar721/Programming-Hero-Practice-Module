const addProduct = () => {
    const productName = document.getElementById('product_name');
    const name = productName.value;
    if (!name) {
        return;
    }
    // addCartItem 
    addCartItem(name);
    // displayProduct
    displayProduct(name);
    //clear input value 
    productName.value = '';
}
const displayCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
const addCartItem = name => {
    const cart = getCart();
    cart[name] ? cart[name] += 1 : cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartitem;
    cart ? cartitem = JSON.parse(cart) : cartitem = {};
    return cartitem;
}

displayCart();