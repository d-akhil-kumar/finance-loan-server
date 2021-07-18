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

exports.calculateEmi = async (req,res,next) => {
    try {
        const data = await services.aggregate([
            {
              $project: {
                _id: 0,
                detail: 1
              }
            },
            {
              $unwind: "$detail"
            },
            {
              $match: {
                $and: [
                  {
                    "detail.type": "XX Loan"
                  },
                  {
                    "detail.Min": {
                      $lte: req.body.amt
                    }
                  },
                  {
                    "detail.Max": {
                      $gte: req.body.amt
                    }
                  },
                  
                ]
              }
            },            
          ])


        if(data.length > 0){
            const rate = data[0].detail.rate
            res.status(200).json({
                status: "success",        
                data: "The total EMI amount",        
                message: req.body.amt*rate*(1+rate)*req.body.tenure/((1+rate)*req.body.tenure-1),        
              });
        }else{
            res.status(200).json({
                status: "Fail",        
                data: "Entered amount is not valid",        
              });
        }
            
    } catch (error) {
        next(error)
    }
}

