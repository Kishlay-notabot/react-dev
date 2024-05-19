const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/todoroute')
require('dotenv').config()
const app = express()
const PORT = process.env.port || 5000
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log(`connected to mongodb`))
    .catch((err) => console.log(`error`))
    app.use(routes)
app.listen(PORT, () => console.log(`listening on ${PORT}`))