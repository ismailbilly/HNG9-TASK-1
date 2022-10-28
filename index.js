require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
// A odject containing user details
const userDetails = {
    "slackUsername": "Bilkisu Ismail",
    "backend": true,
    "age": 32,
    "bio": "I am a computer engineering graduate"
};
//endpoint to display the user details
app.get('/', (req,res)=>{
    res.status(200).json(userDetails)
});
// listening to server
app.listen(process.env.PORT, ()=>console.log('Server Running'));