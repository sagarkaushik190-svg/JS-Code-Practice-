// IIFE: (Immediately Invoked Function Expression)

function print(){
    console.log("Hey Sagar.");
}
print();


(function scan(){                           // IIFE function. 
    console.log("Hey Harshita");
})();                                       //  (); for calling a function.  



( (value) => {                             // arrow function with IIFE.
    console.log(`Hey ${value}`);
})("Mogi");

