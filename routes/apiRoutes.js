const fs = require('fs');
const db = require("../db/db.json");
const router =require("express").Router();
const { v4: uuidv4 } = require('uuid');

function updateDB(info) {
    info = JSON.stringify(info);
    console.log (info);
    fs.writeFile('./db/db.json',info,function(err) {
        if (err) throw err;
    });
}



// GET request for notes
router.get('/notes', (req, res) => {
    // Send a message to the client
    res.json(db);
});

router.post('/notes', (req,res) => {
    req.body.id = uuidv4();
    console.log("req.body.id " + req.body.id);
    
    db.push(req.body);
    updateDB(db);
    console.log(db);

    res.json(req.body);
});

// delete notes with and id that equals req.params.id
// delete tasks not working
router.delete('/notes/:id', (req,res) => {
    const id = req.params.id;
    var newNotes =[];
    for (i=0; i <db.length; i++) {
        var note = db[i];
        if(note.id !== id) {
            newNotes.push(note);
        }
    }
    updateDB(newNotes);
    db = newNotes;
    res.json(newNotes);

});
    

module.exports = router;
