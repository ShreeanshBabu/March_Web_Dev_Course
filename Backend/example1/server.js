// Step 1: Importing the required modules
// Import Means To get the module from the node modules and use it in our code
// we have require('module-name') function to import the module

const express = require('express')


// Step 2 - Define URL / API
// express() Function is a built in function in express Module - This function help us to build or create Server and API

const app = express()

// HTTP METHODS - Communicate with API
// get() method - Get the data from Server/Backend
app.get('/login' , (req,res)=>{

    res.send('Fill The Form to Login')

})

// Step 3: Start The Server

app.listen(3000 , ()=>{
    console.log('Server Running on http://localhost:3000')
})