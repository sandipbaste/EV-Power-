const express = require('express');
const connectToMongo = require('./db');
const dotenv = require('dotenv')
dotenv.config()
const applicationForm = require('./routes/applicationForm')
const cors = require('cors')

connectToMongo()
const app = express()

// Allow requests from your frontend origin
app.use(cors())
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
  app.use('/api/applicationform', applicationForm)


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`)
})
