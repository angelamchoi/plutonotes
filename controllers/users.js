const User = require('../models/user');
const Note = require('../models/note');

// all notes
const allNotes =(req,res) =>{
    Note.find({}, function(err,notes){
        if (err) return err;
        res.render ('mynotes', {notes});
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
        note.save(function(err, note) {
        if (err) return res.redirect('/users/mynotes');
    // Note.find({}, function (err, notes) {console.log('yay!!!', notes);
    res.redirect('/users/mynotes');
    });
}

  //edit 
function edit (req, res) {
    Note.findById(req.params.id)
    .then(function(note) {
        res.render('mynotes/edit', {
            note
        })
}) .catch (function(err) {
    console.log(err);
    res.redirect('/users/mynotes');
})
}    

  // delete
function destroy(req, res) {
    const deleteNote = req.params.id;
    console.log(req.params.id);
    Note.deleteOne(deleteNote);
    res.redirect('/users/mynotes');
}

module.exports = {
    allNotes,
    create,
    edit,
    destroy
}