const express = require('express')
const app = express()
const servicePage = require('./ServicePage')
app.get('/',(request,response) =>{
    
    response.send("Home Page")

})

app.use('/servicepage',servicePage)

app.listen(3500)