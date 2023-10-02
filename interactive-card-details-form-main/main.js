const nameInput = document.getElementById('name-input');
const cardNumberInput = document.getElementById('card-number-input');
const monthInput = document.getElementById('input-month');
const yearInput = document.getElementById('input-year');
const cvcInput = document.getElementById('cvc-input');
const cardNumberText = document.querySelector('.card-number-js');
const nameText = document.querySelector('.name-js');
const expDateText = document.querySelector('.exp-date-js');
const cvcText = document.querySelector('.cvc-number')
const errorName = document.querySelector('.error-card-name');
const errorNumber = document.querySelector('.error-card-number');
const errorDate = document.querySelector('.error-date')
const errorCvc = document.querySelector('.error-cvc')
const form = document.querySelector('.form-js')
const thankYouCard = document.querySelector('.thank-you')
const thankYouButton = document.querySelector('.thank-you-button');

const nameRegex = /^[a-zA-Z ]*$/;
const numberRegex = /^[0-9]*$/;


console.log(monthInput)
form.addEventListener('submit',e =>{
    e.preventDefault();
    const number = cardNumberInput.value;
    const name = nameInput.value;
    let year = yearInput.value;
    let month = monthInput.value;
    const cvc = cvcInput.value;

    if(name === ''){
        errorName.style.display = "block"
        errorName.textContent = "Can't be blank"
    }else if(!nameRegex.test(name)){
        errorName.style.display = "block"
        errorName.textContent = "Wrong format, letters only"
    }
    else{
        errorName.style.display = "none"
    }

    if(number===""){
        errorNumber.style.display = "block"
        errorNumber.textContent = "Can't be blank"
    }else if (!numberRegex.test(number)){
        errorNumber.style.display = "block"
        errorNumber.textContent = "Wrong format, numbers only"
    }else if(number.length <16){
        errorNumber.style.display = "block"
        errorNumber.textContent = "Wrong format, 16 numbers requried"
    }
    else{
        errorNumber.style.display = "none"
    }
  
   
    if(month ==="" ||year ===""){
        errorDate.style.display = "block";
        errorDate.textContent = "Can't be blank"
    }else if(month >12 || month <1){
        errorDate.style.display = "block";
        errorDate.textContent = "Wrong month"
    }else if(year<1){
        errorDate.style.display = "block";
        errorDate.textContent = "Wrong year"
    }
    else if(!numberRegex.test(month)){
        errorDate.style.display = "block";
        errorDate.textContent = "Numbers only"
    }else{
        errorDate.style.display = "none";
    }
    if(cvc ===""){
        errorCvc.style.display = "block";
        errorCvc.textContent = "Can't be blank"
    }
    else if(cvc < 0){
        errorCvc.style.display = "block";
        errorCvc.textContent = "Cannot be lower than 0"
    }else if(cvc.length < 3){
        errorCvc.style.display = "block";
        errorCvc.textContent = "Three numbers required"
    }
    else if(!numberRegex.test(cvc)){
        errorCvc.style.display = "block";
        errorCvc.textContent = "Wrong format, number only"
    }else{
        errorCvc.style.display = "none";
    }
    if(errorName.style.display =="none" && errorDate.style.display=="none" && errorCvc.style.display ==="none" && errorNumber.style.display ==="none"){
        const numberString = number.toString();
        formatedNumberString = '';
        for(let i =0;i<numberString.length;i++){
            if(i%4 ===0){
                formatedNumberString +=' ';
            }
            formatedNumberString += numberString.charAt(i)
        }
        
        if(month < 10){
            month = `0${month}`
        }

        if(year<10){
            year= `0${year}`
        }
        
        nameText.textContent = name;
        cardNumberText.textContent = formatedNumberString;
        expDateText.textContent = `${month}/${year}`
        cvcText.textContent = cvc;


        form.style.display = "none"
        thankYouCard.style.display = "block"
        
        nameInput.value = '';
        cardNumberInput.value = '';
        yearInput.value = '';
        monthInput.value = '';
        cvcInput.value = '';
    }
 
})
thankYouButton.addEventListener('click',()=>{
    thankYouCard.style.display = "none";
    form.style.display = "flex"
})