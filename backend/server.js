const express = require('express');
const connectToMongo = require('./db');
const dotenv = require('dotenv')
dotenv.config()
const applicationForm = require('./routes/applicationForm')
const cors = require('cors')

connectToMongo()
const app = express()
app.use(express.json());
app.use(applicationForm)
app.use(cors());
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})
