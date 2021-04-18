// The path package will be used to construct paths to the html files.
const path = require('path');

// Similar to the apiRoute.js module, this module also exports a function which
// accepts an Express app object and sets up routes. This function adds routes
// for serving the html files.
module.exports = function (app) {
  // Below code handles when users navigate to a page. (e.g. follow a link or
  // enter a url in the address bar) The client receives an HTML document to
  // show the user as a response for each of these routes.
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // If no matching route is found default to the home page. The "*" symbol
  // tells express to route any GET request to this function if none of the
  // other routes had a matching path before it. Its important that this is the
  // last route added to the express app. Any routes added after this one will
  // be unreachable.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
