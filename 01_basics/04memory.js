/*
1. Stack (Primitive values)
Stored by value(copy)
when you assign a primitive(like numbr,string,boolean,null,undefined)to another variable,a copy is created.
Changing one variable does not affect the other
Example:
let a =10;
let b=a;
b=20
console.log(a); //10 (unchanged)
console.log(b); //20

2.Heap(Reference Types)
Objects, arrays, functions are stored in heap memory.
The variable in the stack stores only a reference(address) to the heap.
When you assign one object/array/function to another variable,bothvariables point to the same reference.
Updating through one variable reflects in the other.
Example:
let obj1={name:"Arya",age:22}
let obj2=obj1;
obj.name="Pawana";
console.log(obj1.name);  //Pawana
console.log(obj2.name); //pawana
*/

