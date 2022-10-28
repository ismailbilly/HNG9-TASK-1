require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
// A odject containing user details
const userDetails = {
    "slackUsername": "Bilkisu Ismail",
    "backend": true,
    "age": 32,
    "bio": "I am a backend engineer"
};
//endpoint to display the user details
app.get('/', (req,res)=>{
    res.status(200).json(userDetails)
});
// listening to server
app.listen(port, ()=>console.log('Server Running'));