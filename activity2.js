//Create a variable for any pizza topping. reate a switch statment, if the
//topping is one of your favourite ingredients, log to the concole "These are 
//important ingredients for my pizza". If you dont mind having pepperoni for example
//log to the console "I don't mind having ${topping} on my pizza."
//Finally, for any topping you don't like log "${topping} should not be on my pizza"

let topping = "cheese";

switch (true) {
    case topping == "cheese":
        console.log("These are important ingredients for my pizza");
        break;
    case topping == "pepperoni":
        console.log("I don't mind having pepperoni on my pizza");
        break;
    default:
        console.log("No pizza today");
}
