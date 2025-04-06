const express = require('express');
const { Router } = require('express');
const trainRouter = Router();
require('dotenv').config();
const { auth } = require('../middlewares/auth');
const { userModel } = require('../dbschema/user_model');
const { connectDB } = require('../dbschema/connection');
const { getTrains } = require('../controllers/get_trains');
connectDB();

trainRouter.use(express.json());

trainRouter.get('/checktrains', auth, async function (req, res) {
  const fromStationCode = req.header.from;
  const toStationCode = req.header.from;
  const date = req.header.date;

  let returned_trains = getTrains(fromStationCode, toStationCode, date);
});
trainRoute.get('/checkfare', auth, async function (req, res) {});
trainRouter.get('/pnrsubscribe', auth, async function (req, res) {});
