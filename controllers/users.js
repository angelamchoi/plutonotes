const User = require('../models/user');
const Note = require('../models/note');

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

const allNotes =(req,res) =>{
    Note.find({}, function(err,notes){
        if (err) return err;
        if(!Notes.length){
            names.forEach((n) =>{
                let note= new Note ({title:n.title, date:n.date, content:n.content});
                note.save();
            })
        }
        res.render ('users/mynotes', {title: 'List of All Notes'});
    })
  }


// add note
const create= (req, res) => {
    console.log('hi!');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    } 
    console.log(req.body);
    Note.create(req.body)
    // const newItem= new Note(req.body);

    // User.findById(req.user.id)
    // .then(function (user){
    //     user.save();
    //     return user.note
    // })
    .then(function(note){
        console.log(note);
        res.render('mynotes', {note});
    })
    .catch (function(err) {
        console.log(err);
        res.redirect('/users/mynotes')
    })
        
  }


//   //edit
//   function edit(req, res) {
//    Note.findById(req.params.id, function(err, note) {
//       if (!note.user.equals(req.user._id)) return res.redirect('/mynotes');
//       res.render('mynotes/edit', {notes});
//     });
//   }

  // show


module.exports = {
    index,
    allNotes,
    create
};
