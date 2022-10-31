const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String, match: /[A-F][1-9]\d?/},
    cocktail: [{
        type: Schema.Types.ObjectId,
        ref: 'Cocktail'
      }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Comment',commentSchema)