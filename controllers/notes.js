const User = require('../models/user');
const Note = require('../models/note');

//create
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

  //edit
  function edit(req, res) {
   Note.findById(req.params.id, function(err, book) {
      // Verify book is "owned" by logged in user
      if (!note.user.equals(req.user._id)) return res.redirect('/mynotes');
      res.render('mynotes/edit', {notes});
    });
  }



module.exports = {
  create
  
  };