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

  // notes 
const notesSchema = new Schema ({
  title:{ 
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  creator: [userSchema],
  published: { type: Boolean, default: false},
});

  
  module.exports = mongoose.model('User', userSchema);