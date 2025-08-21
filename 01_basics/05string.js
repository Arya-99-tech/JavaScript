let name="Arya";
let age=22;
//console.log(`My name is ${name} and I am ${age} years old`);

const gameNew=new String('Arya');

// console.log(gameNew);
// console.log(gameNew.__proto__);
// console.log(`gameNew.length: ${gameNew.length}`); //4
// console.log(`gameNew toUppercase :${gameNew.toUpperCase}`);
// console.log(`to find character at 2 we use CharAt : ${gameNew.charAt(2)}`);  //y
// console.log(`To find index we use indexOf :${gameNew.indexOf('r')}`) // 1

// console.log(`gameNew.substring(0,4) value  :${gameNew.substring(0,4)}`);  //here we can't use -ve (negative values).
// console.log(`slicing :${gameNew.slice(-4,1)}`); 
// const spacedString ='  Arya  ';
// console.log(`spaced string:${spacedString}`);//   Arya 
// console.log(`spaced string after trim() : ${spacedString.trim()}`);//Arya

// const url="https://aryaChoudary.com/arya%20choudary";
// console.log(`removing %20 to - : ${url.replace('%20','-')}`);
// console.log(`to check 'arya' is there or not we use includes() : ${url.includes('arya')}`);
// console.log(`to check 'sundar' is in url  or not we use includes() : ${url.includes('sundar')}`);

const link='arya-ac-.com';
console.log(link.split('-'));


