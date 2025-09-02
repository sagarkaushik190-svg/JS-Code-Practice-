function say(){                     // Define a function.
console.log("s");
console.log("a");
console.log("g");
console.log("a");
console.log("r");
}

//say();                            // call the function

// ***************************Function with arguments**************************

function add(number1,number2) {     // function defination with parameters. 
    console.log(number1 + number2);
}

// add(2,3);                          // function arguments. 

// ***************************Function with return**************************

// function mult(num1,num2){
//     const result = num1 * num2;
//     return
// }

// const res = mult(7,3);
// console.log(res);


function userlogin(username) {
    return `${username} login please`
}

console.log(userlogin("sagar"));
