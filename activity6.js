//Create a variable called num. Check if the number is a palindrome (looks the
//same forward as backwards e.g. 1001 or 20202).

let num = 104481
let reverse = parseInt(num.toString().split("").reverse().join(""));

if (num == reverse) {
    console.log(`${num} is a palindromic number.`);
}
else {
    console.log(`${num} is NOT a palindromic number.`)
}