#masterschool_01  exercise 
Note Organizer API
The Note Organizer API is a simple RESTful API built with Express.js that allows you to manage notes. You can add, view, update, and delete notes, which are stored in a JSON file.

Features
Add a note: Create a new note with a title and body.

List all notes: Retrieve all notes stored in the system.

View a note: Retrieve a specific note by its title.

Update a note: Modify the body of an existing note.

Delete a note: Remove a note by its title.

Prerequisites
Before running the API, ensure you have the following installed:

Node.js: Download and install from nodejs.org.

npm: Comes bundled with Node.js.

Installation
Clone the repository (if applicable):

bash
Copy
https://github.com/al-kheder/masterschool_01.git
cd note-organizer-api
Install dependencies:

bash
Copy
npm install express
Running the API
Start the API by running:

bash
Copy
node note_app_api.js
The API will start listening on http://localhost:3000.

API Endpoints
1. GET /notes
Description: Returns a list of all notes.

Example Request:

bash
Copy
curl http://localhost:3000/notes
Example Response:

json
Copy
[
    {
        "title": "Grocery List",
        "body": "Milk, Eggs, Bread",
        "timestamp": "2023-10-05T12:34:56.789Z"
    }
]
2. POST /notes
Description: Adds a new note.

Request Body:

json
Copy
{
    "title": "Grocery List",
    "body": "Milk, Eggs, Bread"
}
Example Request:

bash
Copy
curl -X POST http://localhost:3000/notes \
-H "Content-Type: application/json" \
-d '{"title": "Grocery List", "body": "Milk, Eggs, Bread"}'
Example Response:

json
Copy
{
    "title": "Grocery List",
    "body": "Milk, Eggs, Bread",
    "timestamp": "2023-10-05T12:34:56.789Z"
}
3. GET /notes/:title
Description: Returns the note with the specified title.

Example Request:

bash
Copy
curl http://localhost:3000/notes/Grocery%20List
Example Response:

json
Copy
{
    "title": "Grocery List",
    "body": "Milk, Eggs, Bread",
    "timestamp": "2023-10-05T12:34:56.789Z"
}
4. PUT /notes/:title
Description: Updates the body of the note with the specified title.

Request Body:

json
Copy
{
    "body": "Milk, Eggs, Bread, Butter"
}
Example Request:

bash
Copy
curl -X PUT http://localhost:3000/notes/Grocery%20List \
-H "Content-Type: application/json" \
-d '{"body": "Milk, Eggs, Bread, Butter"}'
Example Response:

json
Copy
{
    "title": "Grocery List",
    "body": "Milk, Eggs, Bread, Butter",
    "timestamp": "2023-10-05T12:34:56.789Z"
}
5. DELETE /notes/:title
Description: Deletes the note with the specified title.

Example Request:

bash
Copy
curl -X DELETE http://localhost:3000/notes/Grocery%20List
Response: 204 No Content

File Structure
note_app_api.js: The main API file.

notes.json: Stores the notes in JSON format.

Testing the API
You can test the API using tools like:

Postman

cURL

Thunder Client (VS Code extension)

Example Workflow
Add a note:

bash
Copy
curl -X POST http://localhost:3000/notes \
-H "Content-Type: application/json" \
-d '{"title": "Grocery List", "body": "Milk, Eggs, Bread"}'
List all notes:

bash
Copy
curl http://localhost:3000/notes
View a note:

bash
Copy
curl http://localhost:3000/notes/Grocery%20List
Update a note:

bash
Copy
curl -X PUT http://localhost:3000/notes/Grocery%20List \
-H "Content-Type: application/json" \
-d '{"body": "Milk, Eggs, Bread, Butter"}'
Delete a note:

bash
Copy
curl -X DELETE http://localhost:3000/notes/Grocery%20List
License
This project is open-source and available under the MIT License.

Author
Al-kheder
