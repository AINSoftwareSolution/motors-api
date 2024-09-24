const Car = require('./carModal');

// Get all cars
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new car
exports.createCar = async (req, res) => {
  const { make, model, year, price, description, mileage, sellerContact } = req.body;

  try {
    const newCar = new Car({
      make,
      model,
      year,
      price,
      description,
      mileage,
      sellerContact,
    });

    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
