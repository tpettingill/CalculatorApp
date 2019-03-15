let express = require('express');

let app = express();

app.use(express.static('public'));

app
    .get('/calculate/:type/:numberOne/:numberTwo', function(req, res){
        let numberOne = req.params.numberOne;
        let numberTwo = req.params.numberTwo;
        let type = req.params.type;
    
        if(numberOne === undefined || numberTwo === undefined){
            res.json({
                error: 'Must specify two numbers to add'
            });
        } else{
            numberOne = parseFloat(numberOne);
            numberTwo = parseFloat(numberTwo);
            
            let result = undefined;
         
            if(type == 'add'){  
               result = numberOne + numberTwo;
            } else if(type == 'subtract'){
                result = numberOne - numberTwo;
            } else if(type == 'multiply'){
                result = numberOne * numberTwo;
            } else if(type == 'divide' && numberTwo !== 0){
                result = numberOne / numberTwo;
            }
            
            res.json({
                result: result
            });
        }
    })
    .listen(8888, function(){
        console.log('Listening');
    });