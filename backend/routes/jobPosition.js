const express = require('express');
const JobPosition = require('../models/jobPosition');

const jobPosition = express.Router();

// POST /api/jobs/job-position
jobPosition.post('/job-position', async (req, res) => {
    const jobData = req.body.jobs;
  
    if (!Array.isArray(jobData)) {
      return res.status(400).json({ message: 'Invalid data format.' });
    }
  
    try {
      for (const job of jobData) {
        const existingJob = await JobPosition.findOne({ title: job.title, location: job.location });
        if (!existingJob) {
          await JobPosition.create(job);
        } else if (existingJob.details !== job.details) {
          existingJob.details = job.details;
          await existingJob.save();
        }
      }
  
      const allJobsFromDB = await JobPosition.find();
      res.status(200).json({ message: 'Job positions synced successfully', jobs: allJobsFromDB });
    } catch (error) {
      console.error('Error syncing job positions:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = jobPosition;
