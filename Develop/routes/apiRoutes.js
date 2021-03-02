
// load up data
const noteDb = require("../db/db.json");
const fs = require("fs");
const genId = require("generate-unique-id");

// routes
module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(noteDb));

    app.post("/api/notes", (req, res) => {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: genId(),
        };
        noteDb.push(newNote);
        res.end();
    });

    app.delete("/api/notes/:id", (req, res) => {
        const noteId = req.params.id;
        console.log(noteId);
        const removeNoteIndex = noteDb.findIndex((obj) => {
            return obj.id === noteId;
        });

        if (removeNoteIndex !== -1) {
            noteDb.splice(removeNoteIndex, 1);
        };
        res.end();
    });

};