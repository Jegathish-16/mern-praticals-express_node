const express = require('express')
const app = express()
// const servicePage = require('./servicePage.js')
app.get('/',(request,response) =>{
    
    response.send("Home Page")

})
// app.use('/servicePage',servicePage)
app.listen(3500)