const express = require('express')
const route = express.Router()

const serviceController = require('../controllers/services')
const memberController = require('../controllers/members')
const requestController = require('../controllers/requests')

//Provide all types of services and its brief description.
route.get('/allservices', serviceController.listAll)

//provide the specific service and its sub service details.
route.get('/service/:type', serviceController.listByType)

//body expected	
/*
    { 
        "mobile" : 9962193319,
        "email":"lp@gmail.com",
        "amt" : 5000,
        "type" : "MI Loan"
        "msg" : " My msg",
        "code" : "SCB"
    }
*/
route.post('/service/:type/form', requestController.create)


//The user can register as a member with their mail id and mobile number
//body expected
/*
    {
        "mobile":9962193629,
        "email":"lpgmail.com",
        "occupation":"self",
        "createpassword":"lpgd@#45"
    }
*/
route.post('/member', memberController.create)


route.all('*/', (req,res,next) => {
    res.status(404).json({
        msg: 'Page Not Found!'
    })
})



module.exports = route