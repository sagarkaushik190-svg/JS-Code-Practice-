let obj = 
{
    js: "javascript",
    py: "python",
    cpp: "c++",
    ruby: "ruby"
}
// console.log(obj.keys);
         // for...in loop:-  can also works to iterate over the properties of an array, but it is not recommended. for..in is mainly suitable for objects.
for (const key in obj) {
    console.log(`ShortName is: ${key} and the fullName is: ${obj[key]}`);
    }

