const express = require('express');
const { body, validationResult } = require('express-validator');
const ApplicationForm = require('../Models/applicationForm');
// const multer = require('multer');

const applicationForm = express.Router();

// multer for resule upload
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });
// const upload = multer({ storage: storage });

applicationForm.post('/api/applicationform', 
    // upload.single('resume'),
    [
    body('firstName', "Enter a valid Name").isLength({ min: 3 }),
    body('lastName', "Enter a valid Last Name").isLength({ min: 3 }),
    body('address', 'Enter a valid Address').isLength({ min: 3 }),
    body('mobileNumber', 'Enter a valid Mobile Number').isLength({ min: 10, max: 12 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('graduation', 'Enter a valid Graduation Name').isLength({ min: 2 }),
    body('cgpa', 'Enter valid CGPA').isLength({ min: 1, max: 4 }),
    body('jobPosition', 'Select any one').notEmpty(),
    body('companyName', 'Enter valid Previous Company Name').isLength({ min: 3 }),
    body('position', 'Enter valid Job Position').isLength({ min: 3 }),
    body('durationFrom', 'Enter a valid join Date').notEmpty(),
    body('durationTo', 'Enter a valid end Date').notEmpty(),
    body('workModule', "Enter valid work Module / Description").isLength({ min: 3 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); 
    }

    try {
        const {
            firstName, lastName, address, mobileNumber, email, graduation,
            cgpa, jobPosition, companyName, position,
            durationFrom, durationTo, workModule
        } = req.body;

        // const resume = req.file?.path;

        let user = await ApplicationForm.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'Sorry, a user with this email already exists' });
        }

        user = new ApplicationForm({
            firstName,
            lastName,
            address,
            mobileNumber,
            email,
            graduation,
            cgpa,
            jobPosition,
            // resume,
            companyName,
            position,
            durationFrom,
            durationTo,
            workModule
        });

        const savedApplication = await user.save();
        res.status(200).json({ message: 'Application submitted successfully', savedApplication });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = applicationForm;