const fs = require("fs");
const { promisify } = require("util");
const appendFile = promisify(fs.appendFile);

module.exports = async (req,res,next) => {
    try {
        logMessage = `${new Date()} - ${req.method} - ${req.url} - ${req.body} \n`
        await appendFile("RequestLogger.log", logMessage)
        next()
    } catch (error) {
        console.log('Error in request logging')
        next()        
    }
}