const express = require('express')
require('dotenv').config()

const app = express()

const port  = process.env.PORT


app.use((req, res)=>{
    res.send('db con')
})


app.listen(port, ()=>{
    console.log(`listening port on http://localhost:${port}`)
})