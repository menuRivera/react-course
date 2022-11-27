require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use('/api/auth', require('./routes/auth'))






app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}...`);
})