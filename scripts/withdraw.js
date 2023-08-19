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
withdrawButton.addEventListener('click',function(){
    withdrawFunctionalities();
})

withdrawField.addEventListener('keyup',function(e){
    if(e.key === 'Enter'){
        withdrawFunctionalities();
    }
})