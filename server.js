require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// port number
const PORT = process.env.PORT || 5000

// parse incoming request bodies with JSON payloads
// Ex: when a client sends a POST or PUT request with a JSON payload in the request body, it is available in the req.body object.
app.use(express.json())

// parses cookies from the incoming requests and makes the cookie data available in the req.cookies
app.use(cookieParser())

// for static files
app.use('/', express.static(path.join(__dirname, 'public')))

// routing
app.use('/', require('./routes/root'))

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})