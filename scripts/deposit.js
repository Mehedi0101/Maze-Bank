depositButton.addEventListener('click',function(){
    depositFunctionalities();
})

depositField.addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        depositFunctionalities();
    }
})