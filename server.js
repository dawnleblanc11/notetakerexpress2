const express = require('express');
const path = require('path');

// access js files
const api = require("./routes/apiRoutes");
const html = require("./routes/htmlRoutes");

const app = express();
const PORT = 3001;


// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// access public folder
app.use(express.static('public'));

app.use('/', html);
app.use('/api', api);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);