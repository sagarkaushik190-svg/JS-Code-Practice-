// let n = "Sagar kaushik";

// for (const nam of n) {
//     console.log(nam);
    
// }

let map = new Map();                           // DEfine map()
        // A Map is a data structure that stores key-value pairs, where each key is unique. It is similar to an object but has some advantages:

// Inserts keys in the order they were added.
// Allows keys of any type, not just strings and symbols.
// Provides better performance when dealing with large datasets.

map.set('IN', 'India');                      // Set value in map.
map.set('US', 'United states of America');  // Set value in map.
map.set('FR', 'France');  // Set value in map.

// console.log(map);

for (const [key, value] of map){
    console.log(key, ":", value);
}

let arr = ["Sagar", "Harshita"];
for (const prar of arr){            // ForOf loop with array. 
    console.log(prar);
    
}
