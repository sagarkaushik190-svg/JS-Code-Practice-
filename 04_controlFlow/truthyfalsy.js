const userName = "";
if (userName) {
    console.log("Got user name.");
} else {
    console.log("Don't have user name.");
}

// This concept is Truthy or falsy values.
 
// Truthy Value: "0",'false', " ", [], {} function(){}.

// Falsy Value: false, 0, -0, BigInt, 0n, "", null, undefined.

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// Nulish Coalescing Operator (??):  null   undefined 

// let score;
// score = 10 ?? 20;
// console.log(score);

// let score;
// score = null ?? 20;
// console.log(score);

let score;
score = undefined ?? 20;
console.log(score);