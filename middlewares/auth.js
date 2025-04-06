const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.jwt;

app.use(express.json());

const auth = function (req, res, next) {
  const token = req.header.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    // req.id = decodedData._id;
    next();
  } else {
    res.status(403).json({
      message: 'Incorrect Credentialss',
    });
  }
};

module.exports = {
  auth: auth,
};
