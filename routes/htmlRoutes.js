// The path package will be used to construct paths to the html files.
const path = require('path');
// export this route to the server.js
module.exports = function (app) {
    // Below code handles when users navigate to a page. (e.g. follow a link or
    // enter a url in the address bar) The client receives an HTML document to
    // show the user as a response for each of these routes.

    // home page route
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // route to the notes file
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // this is whe wildcard route if no route exists for the url
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
