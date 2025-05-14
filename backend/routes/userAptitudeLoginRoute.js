const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const userAptitudeLoginRoute = express.Router();
const AptitudeUser = require('../Models/userAptitudeLogin');

const JWT_SECRET = process.env.JWT_SECRET;

userAptitudeLoginRoute.post(
  '/user-aptitude-login',
  [
    body('email', 'Enter Correct username').isEmail(),
    body('password', 'Enter a Correct Password').notEmpty()
  ],
  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await AptitudeUser.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success,
          error: 'Please try to login with correct credentials'
        });
      }

      const passwordCompare = await bcrypt.compare(password, user.hashedPassword);
      if (!passwordCompare) {
        return res.status(400).json({
          success,
          error: 'Please try to login with correct credentials'
        });
      }

      const data = {
        user: {
          id: user.id
        }
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

module.exports = userAptitudeLoginRoute;
 