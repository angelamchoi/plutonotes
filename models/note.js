const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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