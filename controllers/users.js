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

const addNote=(req, res) => {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const newItem=new Note(req.body);
    newItem.save(function(err){
        if (err) return res.redirect('/create');
        res.redirect('mynotes');
    })
  }

  //edit
  function edit(req, res) {
   Note.findById(req.params.id, function(err, note) {
      if (!note.user.equals(req.user._id)) return res.redirect('/mynotes');
      res.render('mynotes/edit', {notes});
    });
  }

  // show



module.exports = {
    index,
    addNote,

};
