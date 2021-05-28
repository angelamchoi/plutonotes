const User = require('../models/user');
const Note = require('../models/note');
const { deleteOne } = require('../models/user');

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
   publicNote
}