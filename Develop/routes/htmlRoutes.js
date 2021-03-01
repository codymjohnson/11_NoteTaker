const path = require('path');
const { send } = require('process');

// routing
module.exports = (app) => {
    //wild card
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // send user to notes.html
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
}