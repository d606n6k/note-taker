const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');

// This module exports a function which accepts an Express app object and
// and sets up the api routes.
module.exports = function (app) {
  app.get('/api/notes', (req, res) => {
    // read notes data from file
    fs.readFile('./db/db.json', "utf8", (err, data) => {
       if (err) throw err;
       console.log(data);
        // db
        // .then((data)=> {
        //     res.json(data);
        // })
        // .catch((err) => {
        //     // send error response
        //     return res.status(500).end();
        // })
    })
  });

//   app.post('/api/tables', (req, res) => {
//     let isTableReserved = false;
//     tables
//       .getAll()
//       .then((tableData) => {
//         // check if table maximum has been reached
//         isTableReserved = tableData.length < 5;
//         if (isTableReserved) {
//           // add to tables and return promise
//           return tables.push(req.body);
//         }
//         // add to waiting list and return promise
//         return waitingList.push(req.body);
//       })
//       .then(() => {
//         res.json(isTableReserved);
//       })
//       .catch((err) => {
//         console.log(err);
//         return res.status(500).end();
//       });
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
