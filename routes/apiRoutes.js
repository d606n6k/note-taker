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
    
    // let isTableReserved = false;
    // tables
    //   .getAll()
    //   .then((tableData) => {
    //     // check if table maximum has been reached
    //     isTableReserved = tableData.length < 5;
    //     if (isTableReserved) {
    //       // add to tables and return promise
    //       return tables.push(req.body);
    //     }
    //     // add to waiting list and return promise
    //     return waitingList.push(req.body);
    //   })
    //   .then(() => {
    //     res.json(isTableReserved);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return res.status(500).end();
    //   });
//   });

  // This code isn't part of the assignment. This route was added to easily
  // clear out all the table data to facilitate demonstration. Don"t worry about
  // it!
//   app.post('/api/clear', (req, res) => {
//     Promise.all([tables.clear(), waitingList.clear()])
//       .then(() => res.json({ ok: true }))
//       .catch((error) => {
//         console.log(error);
//         res.status(500).end();
//       });
//   });
};
