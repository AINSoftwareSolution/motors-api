const express = require('express');
const { getCars, createCar } = require('./carController');

const router = express.Router();

// GET all cars
router.get('/cars', getCars);

// POST a new car
router.post('/cars', createCar);

module.exports = router;
