const User = require('../models/user');
const Note = require('../models/note');

function create(req, res) {
    const notes = new Notes(req.body);
    // Assign the logged in user's id
    notes.user = req.user._id;
    notes.save(function(err) {
      if (err) return render('/profile');
      //
      res.redirect(`/mynotes/${notes._id}`);
    });
  }
//   const note = new Note ({
//     title: req.body.title,
//     description: req.body.description,
//     content: req.body.content,
//   })
//   note.save()

module.exports = {
  create
  
  };