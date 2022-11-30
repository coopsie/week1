//Edit person object to include a function called sayHi and when its called return "Hello my name is${thisname}."

const person = {
    name: "Aisling",
    age: 34,
    song: ["Like A Prayer",
            "Mr Brightside",
            "Valerie"],
    sayHi(){
        return `Hello my name is hello my name is${this.name}`
    }
}
console.log(person.sayHi());