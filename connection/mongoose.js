const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/FinanceLoan', {                       
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => console.log('FinanceLoan DB connection successful!'));


module.exports = mongoose