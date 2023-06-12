const express = require('express')
const router = express.Router();

const listOfService = [
    { 
        Service: "Web Development ",  
    },
    { 
        Service: "Mobile App Development ", 
    },
    { 
        Service: "Backend Development ", 
    },
    { 
        Service: "Frontend Development ", 
    },
    { 
        Service: "Data Engineering ", 
    },
  ];

router.get('/',(request,response)=>{
    response.send("This is Service Page...")
})

router.param('id', (request,response, next, id) => {
    request.ServicePage = listOfService[id]
    next()
})

router.get('/:id',(request,response)=>{
    console.log(request.ServicePage.Service)
    response.write(request.ServicePage.Service)
    console.log(request.ServicePage.description)
    response.end(request.ServicePage.description)
})

module.exports=router

