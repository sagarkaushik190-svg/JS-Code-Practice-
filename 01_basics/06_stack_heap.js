const stack1 = "Sagar Kaushik";
var stack2 = stack1;             // Assign value to another variable.

var stack2 = "Harshita Kaushik"; // Assingn another value.

console.log(stack2);             // Stack: The only change in the copy value not the original.
console.log(stack1);

let user1 = {
    Name : "Taniya Bhardwaj",
    age : 26
}

var user2 = user1;
user2.age = 34;         // Change done in the original value. 
 
console.log(user2);    // Heap: Only change the original value not copy value as compare to stack. 
console.log(user1);
