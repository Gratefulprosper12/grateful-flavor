const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  location: String,
  rating: Number,
  menu: [
    {
      name: String,
      price: Number,
      image: String
    }
  ]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);