let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toDateString()); //Wed Aug 20 2025
// console.log(myDate.toISOString());  //2025-08-20T07:43:21.120Z
// console.log(myDate.toJSON());  //2025-08-20T07:43:21.120Z
// console.log(myDate.toLocaleDateString()); //8/20/2025
// console.log(myDate.toLocaleString());  //8/20/2025, 7:43:21 AM
// console.log(myDate.toLocaleTimeString()); //7:43:21 AM
// console.log(myDate.toString()); // Wed Aug 20 2025 07:43:21 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toTimeString()); //07:43:21 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); //Wed, 20 Aug 2025 07:45:34 GMT

let myCreatedDate=new Date(2025,0,23);
// console.log(myCreatedDate.toDateString()); //Thu Jan 23 2025  JavaScript counts months from 0 (January) to 11 (December),But if we write the month in two digits, it starts from 01

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()); // its in millesecond
// console.log(Math.floor(Date.now()/1000)); // to convert it in seconds.

let newDate= new Date();
// console.log(newDate.toLocaleString());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
