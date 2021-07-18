const requests = require('../model/requests')
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

        const getData = await requests.findOne({ mobile: req.body.mobile })

        if (getData) {
            res.status(201).json({
                status: "success",
                data: "Your request was already submitted for this service. Try with different contact number",
            });
        } else {        

            const data = await requests.create(req.body)

            res.status(201).json({
                status: "success",
                data: "Thanks for your request. Our Executive will contact you soon.",
            })

        }


    } catch (error) {
        next(error)
    }
}