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

        const getData = await member.findOne({ mobile: req.body.mobile })

        if (getData) {
            res.status(400).json({
                status: "Fail",
                data: "Your are already a member with this contact number",
            });

        } else {

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


exports.updatePassword = async (req, res, next) => {
    try {
        if (!validator.validMobile(req.body.mobile)) {
            res.status(400).json({
                status: "fail",
                message: "Invalid Mobile Number"
            })
        }

        const getData = await member.findOneAndUpdate(
            { mobile: req.body.mobile },
            {
                $set: {
                    password: req.body.password
                },
            },
            {
                new: true, //to return new doc back
                runValidators: true, //to run the validators which specified in the model
            }
        )

        if (getData) {
            res.status(201).json({
                status: "success",  
                data: "Your password has been changed successfully.",  
              });            

        } else {
            res.status(404).json({
                status: "Fail",
                data: "Member not exists",
            });
        }


    } catch (error) {
        next(error)
    }
}

exports.deleteByNo = async (req,res,next) => {
    try {
        if (!validator.validMobile(req.body.mobile)) {
            res.status(400).json({
                status: "fail",
                message: "Invalid Mobile Number"
            })
        }

        const data = await member.deleteOne({mobile: req.body.mobile})

        if(data.deletedCount == 1){
            res.status(201).json({
                status: "success",     
                data:  "Membership has been cancelled for this number",
              });
        }else{
            res.status(404).json({
                status: "Fail",     
                data: "No request from this number",     
              });
        }

    } catch (error) {
        next(error)
    }
}