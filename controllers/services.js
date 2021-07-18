const services = require('../model/services')

exports.listAll = async (req,res,next) => {
    try {

        const data = await services.find({}, {_id:0, __v:0})

        if(data.length > 0){
            res.status(200).json({
                status: "success",
                data: data
            })
        }else{
            res.status(400).json({
                status: "Fail",
                data: "Not Found",
            })
        }      
    } catch (error) {
        next(error)
    }
}

exports.listByType = async (req,res,next) => {
    try {
        const data = await services.find({type: req.params.type}, {_id:0, __v:0})

        if(data.length > 0){
            res.status(200).json({
                status: "success",
                data: data
            })
        }else{
            res.status(400).json({
                status: "Fail",
                data: "Not Found",
            })
        } 
    } catch (error) {
        next(error)
    }
}

