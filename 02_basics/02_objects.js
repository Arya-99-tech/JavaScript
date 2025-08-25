// We mainly have two ways to create objects in JavaScript:
// 1. Using object literals
// 2. Using the constructor method (this is where concepts like singleton can come)

// Using object literals, we can declare an empty object like:
const jsUser = {}; // Empty object

// Objects with key-value pairs can be created like this:
const jsUser = {
    name: "Arya",
    age: 21,
    marks: [95, 98, 97, 100],
    email: "arya85@google.com",
    "place": "Parathode"
};

// To access values, we have two methods:
console.log(jsUser.name);      // Dot notation
console.log(jsUser["name"]);   // Bracket notation

// To access "place" (which has quotes), we must use bracket notation:
console.log(jsUser["place"]);  

// To edit/update values in an object:
jsUser.age = 23;
console.log(jsUser.age);

// If you want to make an object immutable (cannot be modified), use freeze:
Object.freeze(jsUser);

// After freezing, you cannot update jsUser. 
// To "unfreeze," create a clone and then modify it:
const NewObj = { ...jsUser };
NewObj.age = 21;
console.log(NewObj);

// Symbols: a unique data type often used as object keys.
const mySym = Symbol("key1");

// Add a Symbol property to the existing object:
NewObj[mySym] = "value1";

// To access a Symbol key, always use bracket notation:
console.log(NewObj[mySym]); // Output: value1

// We can also add functions to objects:
NewObj.greeting = function() {
    console.log("Hello JsUser (as NewObj)");
};

// Functions can also use string interpolation to access properties:
NewObj.greeting2 = function() {
    console.log(`Hello JsUser, my name is ${this.name}`);
};

// Calling the function:
NewObj.greeting2(); // Output: Hello JsUser, my name is Arya
