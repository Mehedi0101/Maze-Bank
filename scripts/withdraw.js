withdrawButton.addEventListener('click',function(){
    withdrawFunctionalities();
})

withdrawField.addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        withdrawFunctionalities();
    }
})