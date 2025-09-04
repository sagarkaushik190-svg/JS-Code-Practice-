const user = {
    name: "Sagar",
    email: "sagarkaushik@gmail.com",

    welcome: function(){
        console.log(`${this.name}, welcome sir.`)
        // console.log(this);                              

    }
}

user.welcome();
user.name = "Harshita";
user.welcome();

// console.log(this);        // Empty object.   

// function check(){
//     let username = "Sagar";
//     console.log(this.username);
// }
// check();


// const x = function checkX(){
//     let username = "Harshita";
//     console.log(this.username);
// }
// check();

// ^^^^^^^^^^^^^^^^^^^ Arrow Function ^^^^^^^^^^^^^^^^^

const x = () => {
     let username = "Harshita";
    console.log(this);
}
x();


const z = (num1,num2) => (5 + 10)   // Very imprtant type of defining arrow function
console.log(z());                             // Frequetly use in react. 

const y = () =>({id: 1, name: "Sagar"})
console.log(y());
