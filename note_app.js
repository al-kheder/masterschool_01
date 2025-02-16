#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readlineSync = require("readline-sync");

// Path to the notes file
const notesFilePath = path.join(__dirname, "notes.json");

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

// Add a note
function addNote() {
    const title = readlineSync.question("Enter the note title: ");
    const body = readlineSync.question("Enter the note body: ");
    const timestamp = new Date().toISOString();

    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (duplicateNote) {
        console.log("Error: A note with this title already exists.");
    } else {
        notes.push({ title, body, timestamp });
        saveNotes(notes);
        console.log("Note added successfully!");
    }
}

// List all notes
function listNotes() {
    const notes = loadNotes();

    if (notes.length === 0) {
        console.log("No notes found.");
    } else {
        console.log("Your Notes:");
        notes.forEach((note, index) => {
            console.log(`${index + 1}. ${note.title}`);
            console.log(`   Added on: ${note.timestamp}`);
        });
    }
}

// Read a note
function readNote() {
    const notes = loadNotes();

    if (notes.length === 0) {
        console.log("No notes found.");
        return;
    }

    const titles = notes.map((note) => note.title);
    const index = readlineSync.keyInSelect(titles, "Select a note to read:");

    if (index === -1) {
        console.log("No note selected.");
    } else {
        const note = notes[index];
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
        console.log(`Added on: ${note.timestamp}`);
    }
}

// Delete a note
function deleteNote() {
    const notes = loadNotes();

    if (notes.length === 0) {
        console.log("No notes found.");
        return;
    }

    const titles = notes.map((note) => note.title);
    const index = readlineSync.keyInSelect(titles, "Select a note to delete:");

    if (index === -1) {
        console.log("No note selected.");
    } else {
        const filteredNotes = notes.filter((note, i) => i !== index);
        saveNotes(filteredNotes);
        console.log("Note deleted successfully!");
    }
}

// Update a note
function updateNote() {
    const notes = loadNotes();

    if (notes.length === 0) {
        console.log("No notes found.");
        return;
    }

    const titles = notes.map((note) => note.title);
    const index = readlineSync.keyInSelect(titles, "Select a note to update:");

    if (index === -1) {
        console.log("No note selected.");
    } else {
        const newBody = readlineSync.question("Enter the new body for the note: ");
        notes[index].body = newBody;
        notes[index].timestamp = new Date().toISOString();
        saveNotes(notes);
        console.log("Note updated successfully!");
    }
}

// Exit the application
function exitApp() {
    console.log("Goodbye!");
    process.exit(0);
}

const menuOptions = {
    "1": addNote,
    "2": listNotes,
    "3": readNote,
    "4": deleteNote,
    "5": updateNote,
    "6": exitApp,
};

// Display the menu and handle user input
function displayMenu() {
    while (true) {
        console.log("\nWelcome to the Note Organizer!");
        console.log("1. Add a note");
        console.log("2. List all notes");
        console.log("3. Read a note");
        console.log("4. Delete a note");
        console.log("5. Update a note");
        console.log("6. Exit");

        const choice = readlineSync.question("Enter your choice: ");

        if (menuOptions[choice]) {
            menuOptions[choice]();
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
}

// Start the application
displayMenu();
