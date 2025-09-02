const user = {
    id: 1,
    name: "Sagar",
    email: "sagarkaushik190@gmail.com"
}

console.log(user.name);      // extract object elements. 
// console.log(user.email);

const {email: e} = user;   // extract object elements to avoid lengthy code like ....(user.name) 

console.log(e);

