//Create a variable called time, a variable called placeOfWork and a variable
//called townOfHome. Create an if statement that logs to the console where
//someone is at times of the day. E.g. if the time is 7 I'm at home, at 8 I'm 
//commuting, at 9 I'm at work.

let time = 9;
let placeOfWork = "B&Q";
let townOfHome = "Liverpool";

if (time == 7){
    console.log(`I'm at at home in ${townOfHome}.`)
}
else if (time == 8){
    console.log(`I'm commuting.`)
}
else if (time == 9) {
    console.log(`I'm working at ${placeOfWork}.`)
}