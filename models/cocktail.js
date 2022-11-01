const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;




const commentSchema = new Schema({
    comment: {
      type: String,
      required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
    }, {
        timestamps: true
   
  });






const cocktailSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,

    },
    description: {
        type: String,   
    },
    comments: [commentSchema],



} );

  module.exports = mongoose.model('Cocktail', cocktailSchema);