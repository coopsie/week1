//Create an object called pet with the key values of name, typeOfPet, age, colour
//and methods called eat and drink. they should return a string saying
//[Your pet name] is eating/drinking.

const pet = {
    name: "Bubbles",
    type: "Rabbit",
    age: 9,
    colour: "Grey",
    eat(){
        return `${this.name} is eating`
    },
    drink(){
        return `${this.name} is drinking`
    },
    sleep(){
        return `${this.name} is sleeping`
    },
}

console.log(pet.sleep()); 
console.log(pet.eat()); 
console.log(pet.drink()); 