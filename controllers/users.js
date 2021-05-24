const User = require('../models/user');
const Note = require('../models/note');

function index(req, res, next) {
    console.log(req.query)
    let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function (err, users) {
        if (err) return next(err);
        res.render('users/index', {
            users,
            user: req.user,
            name: req.query.name,
            sortKey
            });
        });
}

//create
function create(req, res) {
    const notes = new Notes(req.body);
    // Assign the logged in user's id
    notes.user = req.user._id;
    notes.save(function(err) {
      if (err) return render('/profile');
      //
      res.redirect('/mynotes');
    //   res.redirect(`/mynotes/${notes._id}`);
    });
  }

  //edit
  function edit(req, res) {
   Note.findById(req.params.id, function(err, note) {
      // Verify book is "owned" by logged in user
      if (!note.user.equals(req.user._id)) return res.redirect('/mynotes');
      res.render('mynotes/edit', {notes});
    });
  }


module.exports = {
    index,
    create
};
