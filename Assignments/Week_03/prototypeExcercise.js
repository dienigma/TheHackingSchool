function Player (alias,age, medal, inventory,kills){
    this.alias = alias,
    this.age = age,
    this.medal = medal,
    this.inventory = inventory,
    this.kills = kills
    this.run = function(){
        console.log(`SWOOOSH!`)
    }
    this.callAirStrike = function () {
        console.log(`${alias} called an airStrike`)
    }

    this.getAge = function (){
        return this.age
    }

    this.getKills = function (){
        return this.kills
    }


    this.getInventory = function (){
        return this.getInventory
    }

    this.getInfo = function (){
        return {
            alias: this.alias,
            age: this.getAge(),
            medal: this.medal,
            inventory: this.getInventory(),
            kills: this.getKills()

        }
    }
}

var player1 = new Player('dienigma',24,'Leutenant',['Ak47','Flashbang','glock'],15)
var player2 = Object.create(player1)

console.log(player1.getInfo())
console.log(player2.getInfo())