
// get the data from the server

const myJsonObjectFromServer = '{"name": "John", "age": 30, "city": "New York"}';
console.log(myJsonObjectFromServer); // {"name": "John", "age": 30, "city": "New York"}
console.log(typeof myJsonObjectFromServer); // string

const myParsedObject = JSON.parse(myJsonObjectFromServer);
console.log(myParsedObject); // { name: 'John', age: 30, city: 'New York' }
console.log(typeof myParsedObject); // object

myParsedObject.name = 'Ali';
console.log(myParsedObject); // { name: 'Ali', age: 30, city: 'New York' }

myParsedObject['age'] = 40;
console.log(myParsedObject); // { name: 'Ali', age: 40, city: 'New York' }

// convert the object to a string send the data to the server 
const myJsonString = JSON.stringify(myParsedObject);
console.log(myJsonString); // {"name":"Ali","age":40,"city":"New York"}