// DEPENDENCIES
const express = require('express');
const path = require('path');

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// route for static assets
app.use(express.static('public'));
// app.use('/public', express.static(path.join(__dirname, './public')));

// ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// route for notes needed
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
// need a route for the api/notes 

// LISTENER
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
