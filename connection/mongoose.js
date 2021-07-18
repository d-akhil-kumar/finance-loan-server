const mongoose = require('mongoose')
require('dotenv').config()

try {
  const connectionURL = process.env.DBPATH || 'mongodb://localhost:27017/FinanceLoad'

  mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).then(() => console.log('FinanceLoan DB connection successful!'));
} catch (error) {
  console.log('Error connecting mongoDB server')
}



module.exports = mongoose