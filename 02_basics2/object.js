const mysym = Symbol("key1");     // 1st part to define a symbol in Object. 

const user = {
    name: "Sagar",
    age: 29,
    [mysym]: "mykey1",           // define symbol in object. (2nd step)
    pincode: 124001,
    email: "sagarkaushik190@gmail.com" 
}

// console.log(user["name"]);
// console.log(typeof user[mysym]);
console.log(user);

user.email="sagar@google.com";
console.log(`hi! ${user.email} welcome to our team.`);

user.greeting = function(){
    console.log(`Welcome to our team, ${user.name}.`);
}

console.log(user.greeting());



