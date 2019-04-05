// JavaScript OOPS - functional Prototype & Classes

// OOPS - Object oriented programming

// Properties
// Inheritance, Abstraction, Encapsulation, Polymorphism

// Terminologies
// 1. Class 2. Object 3. Method 4. Constructor 5. Instantiation

// Class is same as function prototype

// Class using functional prototype

function Bootcamper (firstName,lastName){
    this.name = {
        firstName: firstName,
        lastName: lastName
    }
    this.sayHi = function(){
        return `Hi I am ${this.name.firstName} ${this.name.lastName}!`
    }
    
}

var bootCamper = new Bootcamper("Chinmay","Joshi")

console.log(bootCamper.sayHi())