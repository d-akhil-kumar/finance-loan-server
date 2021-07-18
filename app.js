const express = require('express')
const helmet = require('helmet')
require('dotenv').config()

app = express()

app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

