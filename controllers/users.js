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
    // console.log('hi!');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    } 
    // console.log(req.body);
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
    console.log(err);
    res.redirect('/users/mynotes');
})
}    


//delete 
async function destroy(req, res) {
    let note = await
    Note.findByIdAndDelete(req.params.id);
    res.redirect('/users/mynotes');
}

//show
// function show(req, res) {
//     Note.findById(req.params.id)
//       .populate(note)
//       .exec(function (err, note) {

module.exports = {
    allNotes,
    create,
    edit,
    delete: destroy
}