const zoho = new Object();     //Empty object. 

console.log(zoho);

const user = {
    name: "sagar",
    username:  {
        email: "sagarkaushik190@gmail.com",
        password: "123123"
    },
    age: 29,
}

console.log(user.username.password);


const obj1 ={1:"a",2:"b"};
const obj2 ={3:"c",4:"d"};
const obj3 = Object.assign(obj1,obj2);   // combine 2 objects. 

// console.log(obj3);

const sprd = {...obj1,...obj2};      // spred method to combine two or more objects.
console.log(sprd);


const users = [
    {
        id: 1,
        name: "sagar"
    },

     {
        id: 2,
        name: "Harshita"
    },

     {
        id: 3,
        name: "Taniya"
    },
]

console.log(Object.keys(users));   // To extract keys. 
console.log(Object.values(users));   // To extract values.
console.log(Object.entries(users));   // To extract values. 
console.log(users.hasOwnProperty('logedin'));   // user to check wether the value is present or not. 
