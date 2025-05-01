const express = require('express');
const { body, validationResult } = require('express-validator');
const ApplicationForm = require('../Models/applicationForm');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const applicationForm = express.Router();

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.originalname;
        cb(null, uniqueSuffix);
    }
});
const upload = multer({ storage });

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASSWORD
    }
});

applicationForm.post('/',
    upload.single('resume'),
    [
        body('firstName', "Enter a valid Name").isLength({ min: 3 }),
        body('lastName', "Enter a valid Last Name").isLength({ min: 3 }),
        body('address', 'Enter a valid Address').isLength({ min: 3 }),
        body('mobile', 'Valid mobile number required').isMobilePhone(),
        body('email', 'Enter a valid Email').isEmail(),
        body('graduation', 'Enter a valid Graduation Name').isLength({ min: 2 }),
        body('cgpa', 'Enter valid CGPA').isLength({ min: 1, max: 4 }),
        body('position', 'Select any one').notEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        if (!req.file) {
            return res.status(400).json({
                errors: [{ msg: 'Upload a resume', path: 'resume', location: 'body' }]
            });
        }

        try {
            const { firstName, lastName, address, mobile, email, graduation, cgpa, position } = req.body;
            const resumePath = req.file.path;

            // Check for duplicate email
            const existingUser = await ApplicationForm.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'User with this email already exists' });
            }

            const newApplication = new ApplicationForm({
                firstName,
                lastName,
                address,
                mobile,
                email,
                graduation,
                cgpa,
                position,
                resume: resumePath
            });

            const savedApplication = await newApplication.save();

            // Email to user
            const userMailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: 'Your Application Submitted Successfully',
                text: `Hi ${firstName},\n\nThank you for applying. We have received your application and will contact you soon.\n\nRegards,\nTeam`
            };

            // Email to admin
            const adminMailOptions = {
                from: process.env.EMAIL,
                to: process.env.ADMINEMAIL,
                subject: 'New Job Application Submitted',
                text: `New applicant:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nMobile: ${mobile}`,
                attachments: [
                    {
                        filename: path.basename(resumePath),
                        path: resumePath
                    }
                ]
            };

            // Send emails in parallel
            Promise.all([
                transporter.sendMail(userMailOptions),
                transporter.sendMail(adminMailOptions)
            ]).catch((err) => {
                console.error("Email sending error:", err.message);
            });

            res.status(200).json({
                message: 'Application submitted successfully. Emails are being sent.',
                savedApplication
            });

        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
);

module.exports = applicationForm;
