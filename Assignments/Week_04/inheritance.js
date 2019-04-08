function Vehicle (wheels, type) {
    this.wheels = wheels
    this.type = type

}

function Car (wheels,type,name, make){
    Vehicle.call(this, wheels, type)
    this.name = name
    this.make = make

}


Car.prototype.getPrice = function (){
    console.log(`The price for ${this.name} is 10000 USD`)
}

var polo = new Car(4,'sedan','Polo','Volkswagen')

polo.getPrice()
