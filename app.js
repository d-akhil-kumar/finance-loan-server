const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const router = require('./routes/router')
const reqLogger = require('./middlewares/reqLogger')
const errMiddleware = require('./middlewares/error')
require('dotenv').config()

app = express()

app.use(helmet())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(reqLogger)
app.use('/', router)

app.use(errMiddleware)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

