require('dotenv').config();
const express = require('express');
const {mathOperations} = require('./Helpers/operations')
const {userDetails} = require('./Helpers/userDetails')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port = process.env.PORT || 3000;

// let mathOp,firstOperand,secondOperand

// app.post('/', (req,res)=>{
//    const {operation_type,x,y} =req.body
//    mathOp = operation_type
//    firstOperand = x
//    secondOperand = y
// })
// app.get('/', (req,res)=>{
//      const result = mathOperations(mathOp,firstOperand,secondOperand)
//     res.status(200).json({
//         "slackUsername": "Bilkisu Ismail",
//         "result": result,
//         "operation_type":`${mathOp}`
//     })
//  })
 app.post('/api/calculate', (req,res)=>{
   const {operation_type,x,y} =req.body
   const result = mathOperations(operation_type,x,y)
    res.status(200).json({
        "slackUsername": "Bilkisu Ismail",
        "result": result,
        "operation_type":`${operation_type}`
    })
 })
 


//endpoint to display the user details
// app.get('/', (req,res)=>{
//     res.status(200).json(userDetails)
//  });

// listening to server
app.listen(port, ()=>console.log('Server Running'));