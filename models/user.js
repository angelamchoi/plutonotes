const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// //profile schema
// const profileSchema = ( 
//   name: [userSchema],

// )

// //comments
// const commentsSchema

//userschema
const userSchema = new Schema(
    {
      name: String,
      email: String,
      googleId: String,
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model('User', userSchema);