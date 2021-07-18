const fs = require("fs");
const { promisify } = require("util");
const appendFile = promisify(fs.appendFile);

module.exports = async (err, req, res, next) => {
    try {
        logMessage = `${new Date()} - ${err}\n`
        await appendFile("ErrorLogger.log", logMessage)
        res.status(500).send('Internal Server Error')        
    } catch (error) {
        console.log('Error in Error Middleware')
        res.status(500).send('Internal Server Error')        
    }
}