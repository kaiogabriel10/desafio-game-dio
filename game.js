class hero{
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type
    }
    atack(){
        if(this.type === "Mago"){
            let mago = "Magia"
            return `O ${this.type} Atacou usando ${mago}`
        }
        else if(this.type === "Guerreiro"){
            let guerreiro = "Espada"
            return `O ${this.type} Atacou usando ${guerreiro}`
        }
        else if(this.type === "Monge"){
            let monge = "Artes Marciais"
            return `O ${this.type} Atacou usando ${monge}`
        }
        else if(this.type === "Ninja"){
            let ninja = "Shuriken"
            return `O ${this.type} Atacou usando ${ninja}`
        }
    }
}

const heroi1 = new hero("Kaio",18,"Ninja")
console.log(heroi1.atack())