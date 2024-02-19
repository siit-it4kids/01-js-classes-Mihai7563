console.log('main.js loaded!');

class Characters{
    constructor(name, color, avatar){
        this.name = name;
        this.color = color;
        this.avatar = avatar;
        this.isImpostor = Math.random() < 0.3;
        this.isAlive = true;
    }

    eject(){
        if (this.isAlive == true) {
            this.isAlive = false;
            
            let deathMsg = this.isImpostor 
            ? console.log(`${this.name} was ejected. He was an Impostor`) 
            : console.log(`${this.name} was ejected. He was not an Impostor`) ;
        }
        else{
            console.log(`Can't eject ${this.name}. He is already dead!`);
        }
    }

    display(){
        if (this.isAlive == true) {
            console.log(`${this.name}${this.avatar} (${this.color}). Status: Alive and Well 😇`);
        }
        else{
           this.isImpostor 
           ? console.log(`${this.name}${this.avatar} (${this.color}). Status: Deceased 💀 - Impostor`)
           : console.log(`${this.name}${this.avatar} (${this.color}). Status: Deceased 💀 - Not an Impostor`);
        }

    }
}

let players = [
    new Characters('Marian Lopataru', 'brown', '⛏'),
    new Characters('Vlad Tepes', 'red', '🧛🏻‍♂️'),
    new Characters('Andrei Gucci', 'yellow', '💵'),
    new Characters('Dorian Popa', 'dark green', '🍃'),
    new Characters('Catalin Scarlatescu', 'orange', '🍔'),
    new Characters('Nicolae Ceausescu', 'grey', '🧙‍♂️'),
    new Characters('Osama bin Laden', 'black', '💣'),
    new Characters('Unicorn?', 'pink', '🦄'),
    new Characters('Aristotel', 'white', '🤔'),
    new Characters('Marcus Aurelius', 'teal', '🤴')
];

let impostors = players.filter(player => player.isImpostor);

function displayPlayers(){
    for (let i = 0; i < players.length; i++) {
        players[i].display();
    }
}

function ejectPlayer(n){
    players[n].eject();
    players[n].display();
}