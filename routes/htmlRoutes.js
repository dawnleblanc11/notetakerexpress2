const path = require('path');
const router = require("express").Router();



//gets the static notes hmtl page to appear 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  //gets the static main hmtl page to appear 
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports = router;
