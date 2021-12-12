const fs = require('fs');
const db = require("../db/db.json");
const router =require("express").Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function updateDB(info) {
    info = JSON.stringify(info);
    fs.writeFile("./db/db.json",info,function(err) {
        if (err) throw err;
    });
}


// GET request for notes
router.get('/notes', (req, res) => {
    // Send a message to the client
    res.json(db);
});

// posts notes to notes route
router.post('/notes', (req,res) => {
    req.body.id = uuidv4();
    db.push(req.body);
    updateDB(db);
    res.json(req.body);
});


// delete notes with and id that equals req.params.id
// delete tasks not working
//router.delete('/notes/:id', (req,res) => {
//    console.log('Getting to delete function');
    // fs.readFile('./db/db.json','utf8', (err, info) => {
    //     if(err) throw err;
    //     let temp = JSON.parse(db);
    //     temp.splice(req.params.id, 1)
    //     fs.writeFile('./db/db.json', JSON.stringify(temp), (err) => {
    //         if (err) throw err;
    //             res.json('The note has been removed!')
    //       });
    // })
//});


    
module.exports = router;
