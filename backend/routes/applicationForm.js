const express = require('express');
const { body, validationResult } = require('express-validator');
const ApplicationForm = require('../Models/applicationForm');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
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

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASSWORD
  }
});

// Helper functions
const sendConfirmationEmail = async (firstName, email) => {
  const userMailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Your Application Submitted Successfully',
    text: `Hi ${firstName},\n\nThank you for applying. We have received your application.\n\nRegards,\nTeam`
  };
  await transporter.sendMail(userMailOptions);
};

const sendAptitudeEmail = async (firstName, email) => {
  const aptitudeMailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Aptitude Test Invitation',
    html: `<p>Hi ${firstName},</p>
           <p>You're invited to take the aptitude test.</p>
           <a href="${process.env.CLIENT_BASE_URL}" target="_blank" style="padding: 10px 20px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px;">Start Test</a>
           <p>Best of luck!</p>`
  };
  await transporter.sendMail(aptitudeMailOptions);
};

const sendAdminEmail = async (firstName, lastName, email, mobile, resumePath) => {
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
  await transporter.sendMail(adminMailOptions);
};

// POST route
applicationForm.post(
  '/applicationform',
  upload.single('resume'),
  [
    body('firstName').isLength({ min: 3 }),
    body('lastName').isLength({ min: 3 }),
    body('address').isLength({ min: 3 }),
    body('mobile').isMobilePhone(),
    body('email').isEmail(),
    body('graduation').isLength({ min: 2 }),
    body('cgpa').isLength({ min: 1, max: 4 }),
    body('position').notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Resume file required' });
    }

    try {
      const { firstName, lastName, address, mobile, email, graduation, cgpa, position } = req.body;
      const resumePath = req.file.path;

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

      // Send confirmation email
      sendConfirmationEmail(firstName, email).catch(console.error);

      // Send admin notification email
      sendAdminEmail(firstName, lastName, email, mobile, resumePath).catch(console.error);

      // Send aptitude test email after 2 minutes
      setTimeout(() => {
        sendAptitudeEmail(firstName, email).catch(console.error);
      }, 1* 60 * 1000); // 2 minutes

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
