const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
    title: {
      type: String,
      required: true
    },
});

  module.exports = mongoose.model('Cocktail', cocktailSchema);