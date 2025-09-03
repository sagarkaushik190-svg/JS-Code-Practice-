if(true){
  const a = 11;
  let b = 22;
  var c = 33;    // We use var very minimul bcz of this global scope behavior. 
}
// console.log(a);
// console.log(b);
console.log(c);

if (true) {
    const username = "sagar"
    if (username === "sagar") {
        const website = "healthydietmart"
        console.log(username + website)
    }
    // console.log(website);
    
}
// console.log(username);

//******************************  Nested scope in functions   ******************************** */

function mainFunct(num1,num2) {
    console.log(num1 + num2);

    function childFunct(a,b) {
        console.log(a * b);
    }
  childFunct(4,5);
}

  mainFunct(2,3);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}
console.log(addOne(5));

// ************    `IMPORTANT` ::::: another way to define function in variables. ******************

const two = function (nu){
    return nu + 2
}
console.log(two(10));
// console.log(two);

