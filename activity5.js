//Create a variable called num. If num is divisable by 3 log "Fizz" to the console,
//if it's divisable by 5 log "Buzz" to the console, if it's divisable by both
//3 and 5 log "Fizz Buzz". Otherwise log num to console.

let num = "10"
let divThree = (num % 3)
let divFive = (num %5 )

if (divThree == 0 && divFive == 0) {
    console.log("fizz buzz");
}
else if (divThree == 0 && divFive != 0) {
    console.log("fizz");
}
else if (divThree != 0 && divFive == 0) {
    console.log("buzz");
}
else {
    console.log(num)
}