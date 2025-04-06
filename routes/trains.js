const express = require('express');
const { Router } = require('express');
const trainRouter = Router();
require('dotenv').config();
const { auth } = require('../middlewares/auth');
const { userModel } = require('../dbschema/user_model');
const { connectDB } = require('../dbschema/connection');
const { getTrains } = require('../controllers/get_trains');
const { getFare } = require('../controllers/getFare');

trainRouter.use(express.json());

trainRouter.get('/checktrains', auth, async function (req, res) {
  const fromStationCode = req.query.fromStationCode;
  const toStationCode = req.query.toStationCode;
  const date = req.query.date;
  try {
    const returned_trains = await getTrains(
      fromStationCode,
      toStationCode,
      date
    );

    if (!returned_trains) {
      return res.status(500).json({
        error: 'Failed to fetch trains from the API',
      });
    }
    res.status(200).json({ trains: returned_trains });
  } catch (error) {
    console.error('Error in /checktrains route:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

trainRouter.get('/checkfare', auth, async function (req, res) {
  const trainNo = req.query.trainNo;
  const fromStationCode = req.query.fromStationCode;
  const toStationCode = req.query.toStationCode;
  try {
    const returned_fare = await getFare(
      trainNo,
      fromStationCode,
      toStationCode
    );
    if (!returned_fare) {
      return res.status(500).json({
        error: 'Failed to fetch trains from the API',
      });
    }
    res.status(200).json(returned_fare);
  } catch (error) {
    console.error('Error in /checktrains route:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
trainRouter.get('/pnrsubscribe', auth, async function (req, res) {});

module.exports = {
  trainRouter: trainRouter,
};
