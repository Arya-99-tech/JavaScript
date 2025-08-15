const accountId=1445523
let accountEmail="aryakrajeev85@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2   leads to type error , Assingment to constant variable is not possible.

console.log(accountId);

// lets see can we assign different values-
accountEmail="Arya@google.com"
accountPassword="214578"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity]);
/*
const cannot be re-assigned.
var can be re-assigned,but it is not preffered.Because of issue in block-space
let can be reassigned.
Use // for single line command.
*/
// In JavaScript, we can also declare a variable without assigning a value.
// For example:
let accountState;
// This will have the value `undefined` and the type "undefined".

"use strict" // treat all JS code as newer version

// alert(3+3) gives ReferenceError because we are using Node.js, not a browser
// Always keep in mind: code readability should be high, prefer clean code.

/*
Primitive Data Types:

number  = 2   // can hold up to 2^53 - 1
bigint         // for very large integers
string  = "Arya"
boolean        // to hold true or false
null           // standalone value, not undefined, means "empty"
undefined      // value not assigned
symbol         // used for uniqueness (more relevant in advanced topics like React and objects)

Objects:
   console.log(typeof "Arya");    // "string"
   console.log(typeof null);      // "object" (special case)
   console.log(typeof undefined); // "undefined"
*/
