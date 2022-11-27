require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const { dbConnection } = require('./database/config')


app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())


app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

console.log('[Connecting mongo...]');
dbConnection()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Running on port ${process.env.PORT}...`);
        })
    })
