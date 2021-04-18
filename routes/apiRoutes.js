const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');
const { nanoid } = require("nanoid");

// This module exports a function which accepts an Express app object and
// and sets up the api routes.
module.exports = function (app) {
  app.get('/api/notes', (req, res) => {
    // read notes data from file
    fs.readFile('./db/db.json', "utf8", (err, data) => {
       if (err) throw err;
    //    console.log(data);
       res.json(JSON.parse(data)); 
    })
  });


//post the notes to the list
app.post("/api/notes", function (req, res) {
    fs.readFile("./db/db.json", "utf8", function (err, data) {
      if (err) throw err;
      const notes = JSON.parse(data);
      let note = req.body;
      note.id = nanoid();
      notes.push(note);
      fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
        if (err) throw err;
        res.json(notes);
      });
    });
  });
    
};
