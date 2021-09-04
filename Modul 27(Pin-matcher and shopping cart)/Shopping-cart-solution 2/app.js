
// function getClickHandel(product,pric,isAdd) {
//     const productInput = document.getElementById(product + '-number');
//     if (isAdd) {
        
//         productInput.value = parseInt(productInput.value) + 1;
//     } else if( parseInt(productInput.value)>0){
        
//         productInput.value = parseInt(productInput.value) - 1;
//     }
//     let productTotal = document.getElementById(product + '-total');
//     productTotal.innerText = parseInt(productInput.value) * pric;

//     //get Calculate
//     productCalculate();
// }
// function getInputValue(porduct) {
//     const productInput = document.getElementById(porduct + '-number');
//     const productNumber = parseInt(productInput.value);
//     return productNumber;
// }
// function productCalculate(product) {
//     const phoneInput = getInputValue('phone')*1219;
//     const caseInput = getInputValue('case')*59;
//     const subTotal = phoneInput + caseInput;
//     const tax = subTotal / 10;
//     const total = subTotal + tax;
//     document.getElementById('subtotal').innerText = subTotal;
//     document.getElementById('tax').innerText = tax;
//     document.getElementById('total').innerText = total;
// }
// productCalculate();
// // Phone
// document.getElementById('phone-plus').addEventListener('click', function () {
//     getClickHandel('phone',1219,true);
// })
// document.getElementById('phone-minus').addEventListener('click', function () {
//      getClickHandel('phone',1219,false);
// })
// // Case 
// document.getElementById('case-plus').addEventListener('click', function () {
//     getClickHandel('case',59,true)
// })
// document.getElementById('case-minus').addEventListener('click', function () {
//    getClickHandel('case',59,false)
// })

function incriment(product, pric) {
    console.log(pric);
    const productInput = document.getElementById(product + '-number');
    productInput.value = parseInt(productInput.value) + 1;
    const button = document.getElementById(product + '-minus');
    if (productInput.value > 1  ) {
        button.removeAttribute('disabled',true);
    }
    const productAmount = document.getElementById(product + '-total');
    productAmount.innerText = parseInt(productInput.value) * pric;
    calculate();
}
function dicriment(product, pric) {
   
    const productInput = document.getElementById(product + '-number');
    const button = document.getElementById(product + '-minus');
     const productAmount = document.getElementById(product + '-total');
    productAmount.innerText = (productInput.value -1)*pric;
     
    if (productInput.value > 0) {
        productInput.value = parseInt(productInput.value) - 1;
    }
    if (productInput.value == 0) {
          button.setAttribute('disabled',true);
    }
    
    calculate();
}

function getInput(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculate() {
   
    const totalPhone = getInput('phone') * 1219;
    const totalcase = getInput('case') * 59;
    const subTotal = totalPhone + totalcase;
    const tax = subTotal / 10;
    const total = Math.round(subTotal + tax);
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}
calculate();