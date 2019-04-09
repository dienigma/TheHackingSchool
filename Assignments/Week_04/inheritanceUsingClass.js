class Character{
    constructor(name,level,guild){
        this.name = name
        this.level = level
        this.guild = guild
    }

    bio(){
        return {
            name: this.name,
            level: this.level,
            guild: this.guild
        }
    }
}

// var dienigma = new Character("Chinmay",15,"Crimson Knights")

// console.log(dienigma.bio())

class Assassin extends Character{
    
    constructor(name,level,guild,skills, dps){
        super(name,level,guild)
        this.skills = skills
        this.dps = dps
    }
    profile(){
        return {
            skills: this.skills,
            dps: this.dps
        }
    }
    stats(){
        return{
            bio: this.bio(),
            profile: this.profile()
            
        }
    }
}

var dienigma = new Assassin("Chinmay",25,"Crimson Knights",["charge","blink","phantom dagger","juxtapose"],59)

console.log(dienigma.stats())