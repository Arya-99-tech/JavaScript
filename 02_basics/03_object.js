
// // ### ✅ **Level 1: Basics**

// // 1. What is an object in JavaScript?
// //object is a collection of key value pairs used to store data and properties
// // 2. Create an object `student` with `name`, `age`, and `marks`.
// const student={
//     name:'Arya',age:25,marks:100
// }
// // 3. Access the `name` property from this object:
// let person = { name: "Arya", age: 25 };
// console.log(person.name);

// // 4. Add a new key `city` = `"Kochi"` to the above object.
// person.city='Kochi';

// // 5. Update `age` to `26`.
// person.age=26


// // ### ✅ **Level 2: Methods & Nested Objects**

// // 6. Create a nested object:

// //    ```js
// //    let user = {
// //      id: 1,
// //      info: {
// //        name: "Arya",
// //        email: "arya@example.com"
// //      }
// //    };
// //    ```
// let user={
//     id:1,
//     info:{
//         name:'arya',
//         email:'arya@google.com'
//     }
// }


// //    Access the email.
// console.log(user.info.email);

// // 7. Delete `age` from this object:

// let emp = { name: "Raj", age: 30, salary: 50000 };
// delete emp.age


// // 8. Loop through the object keys:

// const book = { title: "JS", pages: 200, author: "John" };
// for (let key in book){
//     console.log(key,book[key]);
    
// }


// // 9. Convert object keys to an array using `Object.keys()`.
// console.log(Object.keys(book));

// // 10. Convert object values to an array using `Object.values()`.
// console.log(Object.values(book));


// // ### ✅ **Level 3: Spread & assign**

// // 11. Merge `obj1` and `obj2` using spread operator.

// let obj1 = { a:1 }; 
// let obj2 = { b:2 };
// let mer={...obj1,...obj2}
// console.log(mer);


// // 12. Merge the above objects using **Object.assign()**.
// let qw=Object.assign({},obj1,obj2);
// console.log(qw);


// // ### ✅ **Level 4: Advanced**

// // 13. What is the difference between **primitive & reference types**?
// //primitive data type store in stack memory so source dont affect when we manipulate copy ,eg number ,string,boolean
// // reference type store in heap memory so copy or source if manipulated it affect source eg object array function 
// // 14. Why does this happen?

// // let a = { x:1 };
// // let b = a;
// // b.x = 5; this happens because of reference types here they are stored in heap memory 
// // console.log(a.x); gives 5 


// // 15. Explain **shallow copy vs deep copy** with an example.
// //shallow copy of an object copy the original  and if manipulated it affect the source too 
// let ar=[10,20,30]
// let wq=ar;
// ar[1]=500
// console.log(ar);
// console.log(wq);

// //deep copy of an object copy the copy of source and if copy is manipulated source dont affect 
// let x='hello'
// let y=x;
// y="hi"
// console.log(y);
// console.log(x);
// // 16. How to stop modification of object keys? (Hint: `Object.freeze`)
// //Object.freeze(obj_name);
// // 17. How to check if a key exists inside object? (Hint: `.hasOwnProperty`)
// console.log(person.hasOwnProperty('name'));


// // ### ✅ **Coding Tasks**

// // 18. Write a function that returns the number of keys in an object.
// function countKeys(obj){
//   return Object.keys(obj).length;
// }
// let studen_t={name:'arya',age:25}
// console.log(countKeys(studen_t));

// // 19. Convert this array into an array of objects:
// let names = ["Arya", "Rahul", "Sneha"];
// // Output: [{name:"Arya"}, {name:"Rahul"}, ...]
// let arx=names.map(n=>({name:n}))
// console.log(arx);

// // 20. Flatten this nested object (1 level):
// let obj = { a:1, b:{ c:2, d:3 } };
// // // Output => { a:1, c:2, d:3 }
// let wr = {a:obj.a,...obj.b}
// console.log(wr);

// // ### 🎯 **Challenge Task**

// // Create a function that compares two objects & checks if they are equal:
// function isEqual(obj1,obj2){
//     return JSON.stringify(obj1)===JSON.stringify(obj2);
// }
// console.log(isEqual({a:1},{a:1}));

// // ```js
// // {a:1, b:2} === {a:1, b:2}  // Output: true
// // ```


