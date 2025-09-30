const arr = [1,2,3,4,5,6,7,8,9,10];

const fil = arr.filter((num) => num > 5)     // Creates a new array containing elements that satisfy a specified condition.
console.log(fil);

const fl = arr.filter((num) => {
    return num < 5
})

console.log(fl);



const obj = [
    {title: "Book One", genre: "English", publish: 1981, edition: 2000},
    {title: "Book Two", genre: "Hindi", publish: 1981, edition: 1976},
    {title: "Book Three", genre: "Maths", publish: 2001, edition: 1947},
    {title: "Book Four", genre: "GK", publish: 1991, edition: 2010}
];

const pr = obj.filter((final) => {               // Play with objects using filter method. 
    return final.title === "Book Four";
})
console.log(pr);
