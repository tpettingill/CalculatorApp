var numberOneEl = document.getElementById('num1');
var numberTwoEl = document.getElementById('num2');
var resultEl = document.getElementById('result');

var http = new Http();

function calc(operator){
    var num1 = numberOneEl.value;
    var num2 = numberTwoEl.value;
    
    if(num1 == '' || num1 === undefined || num2 == '' || num2 === undefined){
        return alert('Please enter two integers');
    }
    
    if(!operator || (operator !== 'add' && operator !== 'subtract' && operator !== 'divide' && operator !== 'multiply')){
        return alert('Invalid operator');
    }
    
    num1 = parseInt(num1) || null;
    num2 = parseInt(num2) || null;
    
    if(num1 === null || num2 === null){
        return alert('Invalid integers');
    }

    http
        .get('/calculate/' + operator + '/' + num1 + '/' + num2)
        .then(function(res){
            resultEl.value = JSON.parse(res).result;
        })
        .catch(function(err){
            console.error(err)
        });
}
function reset(){
    numberOneEl.value = '';
    numberTwoEl.value = '';
    resultEl.value = '';
}