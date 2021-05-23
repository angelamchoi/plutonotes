const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// comments
const commentSchema = new Schema(
{
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

//userschema
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


  module.exports = mongoose.model('User', userSchema);