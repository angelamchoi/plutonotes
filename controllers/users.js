const User = require('../models/user');
const Note = require('../models/note');
const db = require('../config/database').db

// login
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

// all notes
const allNotes =(req,res) =>{
    Note.find({}, function(err,notes){
        if (err) return err;
        if(!notes.length){
            names.forEach((n) =>{
                let note= new Note ({title:n.title, date:n.date, content:n.content});
                note.save();
            })
        }
        res.render ('mynotes', {notes: notes});
    })
  }

// create note
const create= (req, res) => {
    // console.log('hi!');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    } 
    // console.log(req.body);
    const note = new Note(req.body);
        note.save(function(err) {
        if (err) return res.redirect('/mynotes');
    Note.find({}, function (err, notes) {console.log('yay!!!', notes)
    res.render('mynotes',{notes: notes});
    });
  });

  }   

  //edit 
function edit (req, res) {
    res.render('mynotes/edit', {
        note: Note.findById(req.params.id)
    });
};

// function edit(req, res) {
//     Book.findById(req.params.id, function(err, book) {
//       // Verify book is "owned" by logged in user
//       if (!book.user.equals(req.user._id)) return res.redirect('/books');
//       res.render('books/edit', {book});
//     });
//   }

  // delete
function destroy(req, res) {
    const deleteNote = req.params.id;
    Note.destroy(deleteNote);
    res.redirect('/mynotes');
}

module.exports = {
    index,
    allNotes,
    create,
    edit,
    destroy
};
