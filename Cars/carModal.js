const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  mileage: {
    type: Number,
    required: true,
  },
  sellerContact: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
