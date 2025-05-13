const express = require('express')

const experience = express.Router()

experience.post('/experience', [
    body('firstName', 'Enter a valid Name a Name length min 3 character').isLength({ min: 3}),
    body('lastName', 'Enter a valid lastName, lastName length min 3 character').isLength({ min: 3}),
    body('address', 'Enter valid Address').isLength({ min: 3})
    
 ] async(req, res)=>{

})