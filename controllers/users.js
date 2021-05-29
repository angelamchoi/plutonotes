const User = require('../models/user');
const Note = require('../models/note');
const { deleteOne } = require('../models/user');

// all notes
const allNotes =(req,res) =>{
    Note.find({}, function(err,notes){
        if (err) return err;
        res.render ('mynotes', {notes});
    })
}

// create note
const create= (req, res) => {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    } 
    const note = new Note(req.body);
        note.save(function(err, note) {
        if (err) return res.redirect('/users/mynotes');
    res.redirect('/users/mynotes');
    });
}

  //edit 
function edit (req, res) {
    Note.findById(req.params.id)
    .then(function(note) {
        res.render('edit', {
            note
        })
}) .catch (function(err) {
    res.redirect('/users/mynotes');
})
}    

async function updateNote(req,res) {
    let updated = await Note.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
     }) 
     res.redirect('/users/mynotes');
}

//delete 
async function destroy(req, res) {
    let note = await
    Note.findByIdAndDelete(req.params.id);
    res.redirect('/users/mynotes');
}

function showNote (req, res) {
    Note.findById(req.params.id)
    .then(function(note) {
        res.render('show', {
            note
        })
}) .catch (function(err) {
    res.redirect('/users/mynotes');
})
}

function publicNote (req, res) {
    Note.findById(req.params.id)
    .then(function(note) {
        res.render('publicnotes', {
            note
        })
}) .catch (function(err) {
    res.redirect('/users/mynotes');
})
}
module.exports = {
    allNotes,
    create,
    edit,
    updateNote,
    delete: destroy,
    showNote,
    publicNote
}