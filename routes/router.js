const express = require('express')
const route = express.Router()

const serviceController = require('../controllers/services')
const memberController = require('../controllers/members')
const requestController = require('../controllers/requests')

//Provide all types of services and its brief description.
route.get('/allservices', serviceController.listAll)

//provide the specific service and its sub service details.
route.get('/service/:type', serviceController.listByType)

//	Able to calculate the emi amount for a certain period.
// {"amt":300000,"tenure":56,"type":"MI Loan"}
route.post('/service/:type/calculate', serviceController.calculateEmi)


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


//The User can delete the requested form
//  {“mobile”:9972093312 }
route.delete('/deleterequest', requestController.deleteByNo)


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


// change the created password with the mobile number.
//	{"mobile":9962193316,"password”:”sdf123” }
route.put('/updatepassword', memberController.updatePassword)


// 	The User can cancel the membership with mobile number as request.
// {“mobile”:9972093312 }
route.delete('/cancelmember', memberController.deleteByNo)



route.all('*/', (req,res,next) => {
    res.status(404).json({
        msg: 'Page Not Found!'
    })
})



module.exports = route