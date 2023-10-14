// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack (){
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength, ){
        super (health, strength)
        this.name = name;
    }
    receiveDamage(damage){
        this.health -= damage
        
        if (this.health !== 0){
        return `${this.name} has received ${damage} points of damage`
        } 
        
        else (this.health === 0)
        return `${this.name} has died in act of combat`
        }
    battleCry () {
        return "Odin Owns You All!"
}

    }


// Saxon
class Saxon extends Soldier {
    receiveDamage (damage){
        this.health -= damage
        
        if (this.health > 0){
        return `A Saxon has received ${damage} points of damage`
    } 
        else (this.health === 0)
            return "A Saxon has died in combat"
        

    
}
}

// War
class War {
    constructor(){
    this.vikingArmy = []
    this.saxonArmy =[]
    }

addViking(viking){
    

}
addSaxon(saxon){

}
vikingAttack(){
    let dañoVik = (Saxon.receiveDamage === Viking.strength)
    
    return dañoVik

}
saxonAttack(){
    let dañoSaxon = (Viking.receiveDamage === Saxon.strength) 
    
    return dañoSaxon   
}
showStatus(){
    if (this.vikingArmy === 0 && this.saxonArmy > 0){
        return "Saxons have fought for their lives and survived another day..."
    }

    else if (this.saxonArmy === 0 && this.vikingArmy > 0){
        return "Vikings have won the war of the century!"
    }

    else (this.vikingArmy !== 0 && this.saxonArmy !== 0)
        return "Vikings and Saxons are still in the thick of battle."

    } 
}



// let addWarriors = new War()

// addWarriors.addViking("viking1")
// addWarriors.addSaxon("saxon1")

// let vikingArmy = new War ["pepe" ,"juan", "antonio"]
// let saxonArmy = new War ["paco", "andres", "manuel"]