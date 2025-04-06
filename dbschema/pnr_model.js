require('dotenv').config();
const mongoose = require('mongoose');
const { number, string } = require('zod');
const Schema = mongoose.Schema;
const Object_Id = mongoose.Types.ObjectId;

const pnr_Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pnr: {
    type: String,
    required: true,
    unique: true,
  },
  trainNo: String,
  trainName: String,
  from: String,
  departureTime: String,
  arrivalTime: String,
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const pnrModel = mongoose.model('PnrSubscription', pnr_Schema);
module.exports = {
  pnrModel: pnrModel,
};
