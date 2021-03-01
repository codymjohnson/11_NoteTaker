const { fstat } = require("fs");
const path = require("path");
const notes = require('../db/db.json');

module.exports = (app) => {
    // GET route return
    app.get("/api/notes", (req, res) => {
        res.json(notes);
    });

    app.post("/api/notes", (req, res) => {
        const note = req.body;
        let id = id + 1;
        notes.push(note);
        return res.json(notes);
        updateNoteDb();
    });
    // updating json files
    function updateNoteDb() {
        fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
            if (err) throw err;
            return true;
        });
    }

};