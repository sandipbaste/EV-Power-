const express = require('express');
const connectToMongo = require('./db');
const dotenv = require('dotenv')
dotenv.config()
const applicationForm = require('./routes/applicationForm')
const cors = require('cors')
const jobPosition = require('./routes/jobPosition')
const userAptitudeLoginRoute = require('./routes/userAptitudeLoginRoute')
const question = require('./routes/question')

connectToMongo()
const app = express()

// Allow requests from your frontend origin
app.use(cors())


app.use(express.json());
app.use('/api', applicationForm)
app.use('/api', jobPosition)
app.use('/api', userAptitudeLoginRoute)
app.use('/api/questions', question)

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})
