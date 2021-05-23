const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user
const userSchema = new Schema(
    {
      name: { 
        type: String,
        required: true
      },
      email: String,
      googleId: String,
    },
    {
      timestamps: true,
    }
  );

// comments
const commentSchema = new Schema(
  {
    name: [userSchema],
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  }, {
    timestamps: true
  });


  module.exports = mongoose.model('User', userSchema);