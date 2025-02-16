const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Path to the notes file
const notesFilePath = path.join(__dirname, "notes.json");

// Middleware to parse JSON bodies
app.use(express.json());

// Load notes from the file
function loadNotes() {
    try {
        const data = fs.readFileSync(notesFilePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

// Save notes to the file
function saveNotes(notes) {
    fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
}

// GET /notes: Returns a list of all notes
app.get("/notes", (req, res) => {
    const notes = loadNotes();
    res.json(notes);
});

// POST /notes: Adds a new note
app.post("/notes", (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(400).json({ error: "Title and body are required." });
    }

    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (duplicateNote) {
        return res.status(400).json({ error: "A note with this title already exists." });
    }

    const timestamp = new Date().toISOString();
    const newNote = { title, body, timestamp };
    notes.push(newNote);
    saveNotes(notes);

    res.status(201).json(newNote);
});

// GET /notes/:title: Returns the note with the given title
app.get("/notes/:title", (req, res) => {
    const title = req.params.title;
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (!note) {
        return res.status(404).json({ error: "Note not found." });
    }

    res.json(note);
});

// DELETE /notes/:title: Deletes the note with the given title
app.delete("/notes/:title", (req, res) => {
    const title = req.params.title;
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);

    if (notes.length === filteredNotes.length) {
        return res.status(404).json({ error: "Note not found." });
    }

    saveNotes(filteredNotes);
    res.status(204).send(); // No content to return
});

// PUT /notes/:title: Updates the note with the given title
app.put("/notes/:title", (req, res) => {
    const title = req.params.title;
    const { body } = req.body;

    if (!body) {
        return res.status(400).json({ error: "Body is required." });
    }

    const notes = loadNotes();
    const noteIndex = notes.findIndex((note) => note.title === title);

    if (noteIndex === -1) {
        return res.status(404).json({ error: "Note not found." });
    }

    notes[noteIndex].body = body;
    notes[noteIndex].timestamp = new Date().toISOString();
    saveNotes(notes);

    res.json(notes[noteIndex]);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Note Organizer API is listening on port ${PORT}!`);
});
