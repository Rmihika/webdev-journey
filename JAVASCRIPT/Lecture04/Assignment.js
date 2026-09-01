//Qs1.Create a  program thatgenerates a random number
//  representing a diceroll.[The number should be between 1 and 6].

Math.floor(Math.random()*6)+1;

//Qs2.Create an object representing a car that stores 
// the following properties for the car:name,model,color.Print the car’sname.

let car={
    name:"mercedez",
    model:"abc",
    color:"black"
};
console.log(car.name);  //or console.log(car["name"]);

//Qs3.Create an object representing a person with their name, age, and city. Edit their city’s original value to change it to “NewYork”. Add a new property country and set it to the United States.
let person={
    name:"John",
    age:30,
    city:"Los Angeles"
};
person.city="New York";
person.country="United States";
console.log(person);