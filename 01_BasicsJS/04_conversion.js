// console.log(2 > 1); ==> true
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(a=5);

// the reason is that { == }(1) and { > < >= <= }(2) both works differently 
// (2) converts null to 0 and then check
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0);  //false
console.log(undefined > 0);   //false
console.log(undefined < 0);   //false


console.log("2" == 2);  // true 
// converts the data type 
console.log(null == undefined); // true because null and undefined are considered equal

// === 

console.log("2"===2);  // false