//Create an object called coffeeShop with the key values of branch,
//drinks with prices, food with prices. Add methods called drinksOrdered 
//and foodOrdered. They should return a string saying [Your order]
//is... with all items chosen with costs and total costs.

const coffeeShop = {
    
    branch: "Bold Street Coffee",
    drinks: ["coffee",  "tea", "water"],
    drinkPrice: [3, 2, 1] ,
    food: ["sandwich", "cookie", "muffin"],
    foodPrice: [4, 2, 3],
    total: 0,


     foodOrdered (foodChoice) {
        idx = this.food.indexOf(foodChoice);
        foodCost = this.foodPrice[idx];
        console.log(`Your ${foodChoice} costs £${foodCost}`)
        return(`The total bill is £${this.total += foodCost}`)
    },


    drinksOrdered (drinkChoice) {
        idx = this.drinks.indexOf(drinkChoice);
        drinkCost = this.drinkPrice[idx];
        console.log(`Your ${drinkChoice} costs £${drinkCost}`)
        return(`The total bill is £${this.total += drinkCost}`)
    }

} 

console.log(coffeeShop.foodOrdered("muffin"))
console.log(coffeeShop.drinksOrdered("coffee"));
console.log(coffeeShop.drinksOrdered("water"));


//Class notes

// Declaring the object called coffee shop
//const coffeeShop = {
    //Properties of the coffee shop using key value pairs
    //branch: "Humphrey's Coffee Shop",
    //arrDrinks: ["coffee",  "coconut water", "fruit juice"], //An array of drinks (strings)
    //drinkPrices: [2.50, 1.50, 3.00] ,
    //arrFood: ["bacon", "beans", "eggs", "sausage"],
    //foodPrices: [2.00, 4.00, 1.00, 2.50],
    //total: 0,


     //Funtion to determine the cost of the drink
     //foodOrdered (foodParam) {
      //  idx = this.arrFood.indexOf(foodParam); //Finds the index of the value in drink
      //  foodCost = this.foodPrices[idx]; //Use the same index to find the price of the drink
       // console.log(Your ${foodParam} costs £${foodCost})
       // return(The total bill is £ ${this.total += foodCost}) //returns the sting containing the total of both food and drink (i.e. food cost + drink cost)
    //},

    //Funtion to determine the cost of the drink
    //drinksOrdered (drinkParam) {
        //idx = this.arrDrinks.indexOf(drinkParam); //Finds the index of the value in drink
       // drinkCost = this.drinkPrices[idx]; //Use the same index to find the price of the drink
       // console.log(Your ${drinkParam} costs £${drinkCost})
       //return(The total bill is £ ${this.total += drinkCost}) //returns the sting containing the total of both food and drink (i.e. food cost + drink cost)
    //}


//} 

// Calling the functions - to make them run
//console.log(coffeeShop.foodOrdered("eggs"))  // edds is an argument which is passed to the parameter foodParam
//console.log(coffeeShop.drinksOrdered("coffee"));   // coffee is an argument which is passed to the parameter drinkParam
//console.log(coffeeShop.drinksOrdered("coconut water"))