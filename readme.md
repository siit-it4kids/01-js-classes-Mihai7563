# HW 01 - using JavaScript classes

## Requirements

### 1. Implement an AmongUsPlayer class
The class objects will have the following properties:

- name
- color
- avatar (use windows emoticons)
- isImpostor (boolean, generate it random, on creating the object - with a percentage of 30% of being an impostor )
- isAlive (true)

And the methods
- *eject()* 
    - applicable only to alive players.
    - will log in the console "Player PPP was ejected. He was (or was not) an impostor"
    - will set the isAlive property to false
    
- *display()*:
    - if the user is alive, display in the console the avatar, the name, the color and the alive status. 
    - if the user is dead (was ejected), also display if he was an impostor or not.

### 2. Create an array of 10 players
In the js file, create a vector named _players_, containing objects of the AmoungUsPlayer class.

### 3. Display the players in the console
Create a function to display the players in the array. 

### 4. Eject players
Create a function to eject a player, by specifying the array index. After ejecting a player, the function sould also display the players.
