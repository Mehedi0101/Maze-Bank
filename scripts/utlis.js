const loginButton = document.getElementById('login-btn');
const emailField = document.getElementById('email-field');
const passwordField = document.getElementById('password-field');
const invalidText = document.getElementById('invalid-text');
const depositField = document.getElementById('deposit-field');
const depositButton = document.getElementById('deposit-button');
const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const balanceAmount = document.getElementById('balance-amount');
const invalidDeposit = document.getElementById('invalid-deposit');
const withdrawButton = document.getElementById('withdraw-button');
const withdrawField = document.getElementById('withdraw-field');
const invalidWithdraw = document.getElementById('invalid-withdraw');
const insufficientWithdraw = document.getElementById('insufficient-withdraw');


function depositUpdate(field,text){
    const previousAmount = parseFloat(text.innerHTML);
    const newAmount = parseFloat(field.value);
    text.innerHTML = (previousAmount+newAmount).toFixed(2);
}

function withdrawUpdate(field,text){
    const previousAmount = parseFloat(text.innerHTML);
    const newAmount = parseFloat(field.value);
    text.innerHTML = (previousAmount-newAmount).toFixed(2);
}

function validation(field,text){
    if(isNaN(field.value) || field.value === ''){
        text.classList.remove('hidden');
        field.value = '';
        return true;
    }
    else{
        text.classList.add('hidden');
        return false;
    }
}

function validationSufficiency(field,amount,text){
    if(parseFloat(field.value) > parseFloat(amount.innerHTML)){
        text.classList.remove('hidden');
        field.value = '';
        return true;
    }
    else{
        text.classList.add('hidden');
        return false;
    }
}

function depositFunctionalities(){
    if(validation(depositField,invalidDeposit)){
        return;
    }
    depositUpdate(depositField,depositAmount);
    depositUpdate(depositField,balanceAmount);
    depositField.value = '';
}

function withdrawFunctionalities(){
    if(validation(withdrawField,invalidWithdraw)){
        insufficientWithdraw.classList.add('hidden');
        return;
    }
    if(validationSufficiency(withdrawField,balanceAmount,insufficientWithdraw)){
        return;
    }
    depositUpdate(withdrawField,withdrawAmount);
    withdrawUpdate(withdrawField,balanceAmount);
    withdrawField.value = '';
}