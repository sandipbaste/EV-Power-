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

applicationForm.post('/', 
    // upload.single('resume'),
    [
    body('firstName', "Enter a valid Name").isLength({ min: 3 }),
    body('lastName', "Enter a valid Last Name").isLength({ min: 3 }),
    body('address', 'Enter a valid Address').isLength({ min: 3 }),
    body('mobile', 'Valid mobile number required').isMobilePhone(),
    body('email', 'Enter a valid Email').isEmail(),
    body('graduation', 'Enter a valid Graduation Name').isLength({ min: 2 }),
    body('cgpa', 'Enter valid CGPA').isLength({ min: 1, max: 4 }),
    body('position', 'Select any one').notEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); 
    }

    try {
        const { firstName, lastName, address, mobile, email, graduation,cgpa, position } = req.body;

        // const resume = req.file?.path;

        let user = await ApplicationForm.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'Sorry, a user with this email already exists' });
        }

        user = new ApplicationForm({
            firstName,
            lastName,
            address,
            mobile,
            email,
            graduation,
            cgpa,
            position,
            // resume,
        });

        const savedApplication = await user.save();
        res.status(200).json({ message: 'Application submitted successfully', savedApplication });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = applicationForm;