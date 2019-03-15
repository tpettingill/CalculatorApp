var numberOneEl = document.getElementById('num1');
var numberTwoEl = document.getElementById('num2');
var resultEl = document.getElementById('result');

function calc(operator){    
    var num1 = parseInt(numberOneEl.value);
    var num2 = parseInt(numberTwoEl.value);

    if(operator === '+'){
        resultEl.value=num1+num2;
    } else if(operator === '-') {
        resultEl.value=num1-num2;
    } else if(operator === 'X'){
        resultEl.value=num1*num2;
    } else if(operator === '/') {
        resultEl.value=num1/num2;
    }
}
function reset(){
    numberOneEl.value = '';
    numberTwoEl.value = '';
    resultEl.value = '';
}