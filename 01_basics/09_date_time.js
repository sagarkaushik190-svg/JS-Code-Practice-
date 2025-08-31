const mydate = new Date();
console.log(mydate.toString());   // Convert proper date format.
console.log(mydate.toDateString());  // Convert date without time.
console.log(mydate.toLocaleString());  // Convert date with time.(for India)

console.log(typeof mydate);      // Object.

let myCreatedDate = new Date(2025, 7, 31);
console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.getMonth());
console.log(myCreatedDate.getDay());
console.log(myCreatedDate.getFullYear());

let main = myCreatedDate.toLocaleString('default',{
    weekday: "long",
    year: "numeric",
    day:"numeric",
    month:"numeric"

})

console.log(main);


  