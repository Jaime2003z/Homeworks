const express = require('express')
require('dotenv').config()
const app = express();
app.use(express.static('public'))
app.use('/api/auth', require('./routes/auth'))

//The server is listening on the port specified in the .env file in the PORT variable
app.listen(process.env.PORT, ()=>{
    console.log('Server running on port: ', process.env.PORT)
})