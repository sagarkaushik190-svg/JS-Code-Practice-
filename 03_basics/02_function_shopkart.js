function shopkart(...val1) {        // ... spread: for print all values in array form. 
    return val1
}

console.log(shopkart(100,200,300,400));

const user = {
    id: 1,
    name: "sagar",
    email: "sagarkaushik190@gmail.com"
}

function fetchUser(anyobject){      // This function is used to fetch object elements. you can fetch any of the object information. 
    console.log(`Welcome ${anyobject.name} in this code you email id is ${anyobject.email}.`);
    
}
fetchUser(user);

const newArray = [100,200,300,400,500];   // Define array. 
 
function returnsecond(getarray){        // define variable and assign array variable at the calling time. 
return getarray[2]
}
console.log(returnsecond(newArray));