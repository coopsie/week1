//Class notes

//const person = {
    //name:"Aisling",
    //age: 34,
    //song: ["Like A Prayer",
            //"Mr Brightside",
            //"Valerie"

    //]
//}
//console.log(person["song"])


let offer = "none";
let time = 1000;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: ["Cappuccino", 
            "Latte", 
            "Filter Coffee", 
            "Tea", 
            "Hot Chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",
    openCafe(){
        if(this.hasSpecialOffers)
        return "Time for a special offer";
    },
    closeCafe(){ 
        return "We are closed, come back tomorrow!";
    }
}
//in NEW javascript ES6 they dont use => inside objects

   // if (time < 1100) {
    //offer = cafe.breakfastOffer;
 //}  else if (time < 1500) {
    //offer = cafe.lunchOffer;
 //}  else {
    //offer = cafe.noOffer;
 //}
 
console.log(cafe.openCafe());
console.log(cafe.closeCafe());



//const alarmClock = {
    //weekendAlarm: "No alarm needed",
    //weekdayAlarm: "Get up at 7am"
//};
    //let day = "Saturday";
    //let alarm = " ";

    //if(day == "Saturday" || day == "Sunday"){
    //alarm = alarmClock.weekendAlarm;
//}
    //else{
    //alarm = alarmClock.weekdayAlarm;
//}
 //console.log(alarm)
