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

// var bootCamper = new Bootcamper("Chinmay","Joshi")

// console.log(bootCamper.sayHi())


function Instructor(name,techstack,experience){
    this.name = name
    this.techstack = techstack //Array
    this.experience = experience

    this.getTechStack = function (){
        console.log(`${this.name}'s techstacks:`)
        this.techstack.forEach(element => {
            console.log(element)
        });
    }

    this.sayHi = function () {
        console.log(`Hi! I am ${this.name}`)
    }

}

var instructor = new Instructor('Prashanth',['MERN','ROR','LAMPP','PYTHONWEB2PY'], 12)

instructor.getTechStack()
// instructor.sayHi()

// console.log(instructor)