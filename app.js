let express = require('express');

express()
    .use(express.static('public'))
    .get('/calculate/:type/:numberOne/:numberTwo', function(req, res){
        let numberOne = req.params.numberOne;
        let numberTwo = req.params.numberTwo;
        let type = req.params.type;
    
        //make sure numbers are defined
        if(numberOne === undefined || numberTwo === undefined){
            res.json({ error: 'Must specify two numbers to add' });
        } else{
            numberOne = parseInt(numberOne);
            numberTwo = parseInt(numberTwo);
            
            let result = undefined;
         
            //calculate result using specified operator
            if(type == 'add'){  
               result = numberOne + numberTwo;
            } else if(type == 'subtract'){
                result = numberOne - numberTwo;
            } else if(type == 'multiply'){
                result = numberOne * numberTwo;
            } else if(type == 'divide' && numberTwo !== 0){
                result = numberOne / numberTwo;
            }
            
            //return result
            res.json({ result: result });
        }
    })
    .listen(8888, function(){
        console.log('Listening on localhost:8888');
    });