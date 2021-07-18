const member = require('../model/members')
const validator = require('../utils/validations')

exports.create = async (req, res, next) => {
    try {

        if (!validator.validEmail(req.body.email)) {
            res.status(400).json({
                "status": "fail",
                "message": "Invalid emailid"
            })
        }

        if (!validator.validMobile(req.body.mobile)) {
            res.status(400).json({
                status: "fail",
                message: "Invalid Mobile Number"
            })
        }

        const getData = await member.findOne({mobile: req.body.mobile})

        if(getData){
            res.status(400).json({
                status: "Fail",
                data: "Your are already a member with this contact number",
            });

        }else{            
    
            const data = await member.create(req.body)
    
            res.status(201).json({
                status: "success",
                data: "Your account has been created successfully.",
            });

        }        

    } catch (error) {
        next(error)
    }
}