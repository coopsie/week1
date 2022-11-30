//Create 2 variable called num1 and num2. Create an if statement that checks if
//the result of the sum is even. If it is return the number, otherwise return the 
//numbers multiplied together.

let num1 = 3;
let num2 = 5;
let sum = (num1+num2)

if ((sum & 1) == 0) {
    console.log("Even number")
}
else {
    console.log(`${num1} x ${num2}`)
}

