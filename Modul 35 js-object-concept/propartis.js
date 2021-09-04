const mobile = {
    name: 'mi note9 pro',
    color: 'black',
    price: 18000
};

// const keys = Object.keys(mobile);
// const values = Object.values(mobile);
// Object.seal(mobile);
// mobile.price = 20000;
// delete mobile.price;
// console.log(mobile);

for (const prop in mobile) {
    console.log(mobile[prop]);
}