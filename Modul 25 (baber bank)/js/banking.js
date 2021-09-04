
function getInputValue(input_Id) {
    //get input value
  const inputId = document.getElementById(input_Id);
  const inputValu = parseFloat(inputId.value);
   //clear deposit Input value
    inputId.value = '';
  return inputValu;
}

function getInputValueDisplay(displayId, inputValu, isAdd) {
  const inputId = document.getElementById(displayId);
  const displayResult = parseFloat(inputId.innerText);
  if (isAdd == true) {
   inputId.innerText = displayResult + inputValu;
  } else {
    inputId.innerText = displayResult - inputValu;
    
  }

}
document.getElementById('deposit-btn').addEventListener('click', function () {
  
  const deposit = getInputValue('deposit-input');
  if (deposit > 0) {
     // display Deposit Amount
   getInputValueDisplay('deposit-amount',deposit,true);
    //Withdraw Balance Add 
   getInputValueDisplay('withdraw-amount',deposit,true);
  }
 
   
  })
        
  //Withdraw 

document.getElementById('withdraw-btn').addEventListener('click', function () {
  // get input Value 
  const withdraw = getInputValue('withdraw-input');
  if (withdraw > 0) {
     // display Deposit Amount
   getInputValueDisplay('withdraw-total',withdraw,true);
   //Withdraw Balance Add 
   getInputValueDisplay('withdraw-amount',withdraw,false);
  }

    })
        

