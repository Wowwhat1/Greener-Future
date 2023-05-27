const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const port = 3000

require('./router/routes')(app)
const db = require('./config/database/index')

db.connect()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
