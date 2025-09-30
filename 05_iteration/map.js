const ar = [2,3,4,5]

const fil = ar.map((num) => num + 1)     // 
console.log(fil);

const obj = [
    {title: "Book One", genre: "English", publish: 1981, edition: 2000},
    {title: "Book Two", genre: "Hindi", publish: 1981, edition: 1976},
    {title: "Book Three", genre: "Maths", publish: 2001, edition: 1947},
    {title: "Book Four", genre: "GK", publish: 1991, edition: 2010}
];

const pr = obj.map((final) => {     // creates a new array from calling a function for every array element.
    return final.title === "Book Four";
    
    
});
console.log(pr);
    console.log(`Book = ${pr.final}`);

