const mongoose = require('mongoose');

const userViewsSchema = new mongoose.Schema({
  UserID: {
    type: String,
    required: true,
    trim: true
  },
  viewDate: {
    type: Date,
    required: true,
    trim: true
  },
  productID: {
    type: String,
    required: true,
    trim: true
  }
});

const UserViews = mongoose.model('UserView', userViewsSchema);

module.exports = UserViews;
