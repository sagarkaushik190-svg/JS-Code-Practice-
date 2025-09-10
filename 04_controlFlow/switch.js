// >> Based on a condition, switch selects one or more code blocks to be executed.

// >> switch executes the code blocks that matches an expression.

// >> switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

let month = "january";

switch (month) {
    case "Feb":
        console.log("Feb");        
        break;
    case "january":
        console.log("january");        
        break;
    case "December":
        console.log("December");        
        break;

    default:
        console.log("default statement");      
        break;
}