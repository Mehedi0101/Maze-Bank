loginButton.addEventListener('click',function(){

    if(emailField.value === 'michaeldesanta@gmail.com' && passwordField.value === '696969'){ 
        invalidText.classList.add('hidden');
        window.location.href = 'account-info.html';
    }
    else{
        invalidText.classList.remove('hidden');
    }
    
})