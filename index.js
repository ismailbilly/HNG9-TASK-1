const express = require('express');
const {mathOperations} = require('./Helpers/operations')
const {userDetails} = require('./Helpers/userDetails')

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 3000;


app.post('/', (req,res)=>{
   
   const {operation_type,x,y} = req.body;
   
   let mathOp = null;
   
   firstOperand = parseInt(x);

   secondOperand = parseInt(y);  

   let operationResult = 0;

   let matchedOperation = '';

   const possibleOperations = ['add', 'addition', 'sum', 'subtraction', 'difference', 'subtract', 'multiplication', 'product', 'multiply'];

   // Here we inspect the operation_type string in order to know what sort of operation to perform
   for(let possibleOperation of possibleOperations){

      // This checks to see if a possible operation is found as a substring or matches exactly the operation_type.  
      if( operation_type.indexOf(possibleOperation) > -1 ){
          
         switch(possibleOperation){
            case 'add':
            case 'sum':
            case 'addition':
                  operationResult = firstOperand + secondOperand;
                  matchedOperation = 'addition';
               break;

            case 'subtract':
            case 'subtraction':
            case 'difference':
                  operationResult = firstOperand - secondOperand;
                  matchedOperation = 'subtraction';
               break;
            
            case 'product':
            case 'multiplication':
            case 'multiply':
                  operationResult = firstOperand * secondOperand;
                  matchedOperation = 'multiplication';
               break;
         }

         // This implies a match has been found and the mathematical operation performed
         if(matchedOperation !== ''){
            break; //exits the loop
         }
      }

   }

   // JSON response
   return res.status(200).json({'operation_type': matchedOperation, 'result': operationResult, 'slackUsername': 'ismail.bilkisu' });
})

// listening to server
app.listen(PORT, ()=>console.log('Server Running'));




