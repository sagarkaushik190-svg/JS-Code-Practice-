const arr = "Sagar Kaushik";
for (const element of arr) {
    console.log(element);
    
}
                              // The for...of loop is used to iterate over iterable objects like arrays, strings, or sets.

const mp = new Map();
// console.log(typeof(mp));
                           /*
                            A Map is a data structure that stores key-value pairs, where each key is unique. It is similar to an object but has some advantages:

                    Inserts keys in the order they were added.
                      Allows keys of any type, not just strings and symbols.
                    Provides better performance when dealing with large datasets.
                     */

mp.set('IN', 'India');
mp.set('FR', 'France');
for( const pr of mp){
    console.log(pr);
}
console.log(mp);

       /*  forOf loop with map. */
for(const [key,value] of mp){
    console.log(key, ">", value);    
}

       /*  forOf loop with array.  */
const arry = ["Sagar", "Harshita"];
for(const element of arry){
    console.log(element);
    
}