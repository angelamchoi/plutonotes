const User = require('../models/user')

module.exports = {
create:create

}

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