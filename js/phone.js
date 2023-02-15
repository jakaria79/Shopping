function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const currentPhoneNumberString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(currentPhoneNumberString);

    let newPhoneNumber;
    if (isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1 ;
    }

      phoneNumberField.value = newPhoneNumber;
      return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
      phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
  
    const newPhoneNumber = updatePhoneNumber(true); 

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

})

document.getElementById('btn-phone-minus').addEventListener(function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})