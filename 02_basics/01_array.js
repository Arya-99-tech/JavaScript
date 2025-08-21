//array

const myArr=[0,1,2,3,4,5];
// myArr.push(6)
// myArr.push(7) // add elelment at the end of the array
// myArr.pop()   // remove last digit
// myArr.unshift(9) //  insert to the first 
// myArr.shift()  // removes first element
// console.log(myArr);
// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); //-1
// console.log(myArr.indexOf(19)); //-1
// console.log(myArr.indexOf(3)); //3

const newArr=myArr.join()
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5
// console.log(typeof newArr); //string


// slice(start,end)  , 

console.log("A ",myArr); //A  [ 0, 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3)
console.log(myn1);//[ 1, 2 ]
console.log("B ",myArr); // B  [ 0, 1, 2, 3, 4, 5 ]

//splice(start,deleteCount,..item)
const myn2=myArr.splice(1,3) 
console.log(myn2);//[ 1, 2, 3 ]
console.log("c ",myArr);//c  [ 0, 4, 5 ]


