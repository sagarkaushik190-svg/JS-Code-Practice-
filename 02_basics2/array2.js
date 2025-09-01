const arr1 = ["Ram", "Shyam"];
const arr2 = ["Sagar", "Harshita"];

const merg = arr1.concat(arr2);    // Merge 2 arrays and return a single array. 
console.log(merg);

const sprd = [...arr1, ...arr2];  // this spread method to merge any numbers of array and return single array. 
console.log(sprd);

const arry3 = [1,2,3,4,[5,7,8,99,34,[7,6,3],[76,8]]];
console.log(arry3.flat(Infinity));    // flat is uused to merge any number of arrays. 


console.log(Array.isArray("Sagar"));  //Check whether the elemet is array or not.
console.log(Array.from("Sagar"));    // Return an array. 