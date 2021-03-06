const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// notes 
const noteSchema = new Schema ({
    title:{ 
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: {
      type: String,
      required: true
    },

  });

  module.exports = mongoose.model('Note', noteSchema);