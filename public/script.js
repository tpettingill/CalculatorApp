var numberOneEl = document.getElementById('num1');
var numberTwoEl = document.getElementById('num2');
var resultEl = document.getElementById('result');

var http = new Http();

function calc(operator){
    var num1 = parseInt(numberOneEl.value);
    var num2 = parseInt(numberTwoEl.value);

    http
        .get('/calculate/' + operator + '/' + num1 + '/' + num2)
        .then(function(res){
            var result = JSON.parse(res);
            console.log(res)
            console.log(result)
            resultEl.value = result.result;
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