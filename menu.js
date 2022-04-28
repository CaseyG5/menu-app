// Create a menu app as seen in this week’s video. 
// What you create is up to you as long as it meets the following requirements.
// 	•	Use at least one array.
// 	•	Use at least two classes.
// 	•	Your menu should have the options to create, view, and delete elements.


/*
MENU
=====
1) create character
    enter name for your new character: 
    enter points for Power, Toughness, Intellect and Charisma, totaling up to 15:
    e.g. 5, 4, 4, 2
    >total points exceed 15, try again
    >character <name> created
        add character to array

2) view characters
    list all characters in array

3) delete character
    enter ID/name of character to delete:
    >no character with that name/ID, try again
    >character deleted

4) exit

*/

/*
menu object
    menu selection 
    constructor()
    showMenuOptions()
        wait for selection
*/

class Menu {
    constructor() {
        this.allCharacters = [];
    }

    start() {
        let selection = this.showOptions();

        while( selection != 4) {
            switch( selection ) {
                case "1":
                    this.createCharacter();
                    break;
                case "2":
                    this.displayCharacters();
                    break;
                case "3":
                    this.deleteCharacter();
                    break;
                default:
                    alert("Invalid selection. Please try again.");
            }
            selection = this.showOptions();
        }

        alert("Farewell!");
    }

    showOptions() {
        return prompt(
            `Make your selection:

             1) Create new character
             2) Show all characters
             3) Delete a character
             4) Exit`);
    }

    createCharacter() {
        // prompt for character name and info
        let name = prompt("Enter a name for your character: ");
        let attributeValues = [0, 0, 0, 0]
        let strOfValues = prompt("Now enter integer values for your character's attributes " +
                "for power, toughness, intelligence and charisma, " +
                "with a total of up to 10");

        // take a string of values and split them        
        let arrOfValues = strOfValues.split(" ");

        // make sure there are 4 values
        if(arrOfValues.length != 4) {
            alert("Invalid input. Please try again.");
            return;
        }

        // then copy them to the Attributes array
        // and round down in case they are not integers
        for( let i = 0; i < 4; i++ ) {
            attributeValues[i] = Math.floor( Number(arrOfValues[i]) );
        }

        // then make sure total <= 10
        if( attributeValues.reduce( (prev, current) => (prev + current) ) > 10 ) {
            alert("Attribute values exceed 10. Please try again.");
            return;
        }

        // add a new character to the set
        this.allCharacters.push(new Character(name, 
                            attributeValues[0], attributeValues[1], 
                            attributeValues[2], attributeValues[3]) );
        
        // inform user
        alert(`Character "${name}" has been created.`);
    }

    displayCharacters() {
        
        if( this.charactersExist() ) {       // if there are characters to display

            let strOfCharacters = "";

            // assemble string with all characters and their info
            for( let i = 0; i < this.getCharacterCount(); i++ ) {
                strOfCharacters += `${i}) ` + this.allCharacters[i].getCharacterInfo();
            }

            // list all characters & info
            alert("These are the characters we have: \n\n" + strOfCharacters);     
        }

    }

    deleteCharacter() {

        if( this.charactersExist() ) {        // if there are characters to delete

            // prompt for character ID to delete
            let id = prompt("Enter the ID of the character you want to delete: ");
            if( id > -1 && id < this.getCharacterCount() )
                this.allCharacters.splice(id, 1);
            else alert("No character exists with that ID.");
        }

    }

    // returns the # of characters we have
    getCharacterCount() {
        return this.allCharacters.length;
    }

    // returns a boolean for whether we have at least 1 character
    charactersExist() {
        if( this.getCharacterCount() == 0 ) {
            alert("There are no characters to display/delete.");
            return false;
        }
        return true;   
    }
}

/*
character object
    name
    power
    toughness
    intellect
    charisma

    constructor/create()
    delete()
*/

class Character {
    constructor(name, power, toughness, intelligence, charisma) {

        this.name = name;
        this.power = power;
        this.toughness = toughness;
        this.intelligence = intelligence;
        this.charisma = charisma;
    }

    getCharacterInfo() {
        return `${this.name}
            Power: ${this.power}   Toughness: ${this.toughness}
            Intelligence: ${this.intelligence}   Charisma: ${this.charisma}
            ----------` + "\n";
    }
}

// upon script initialization,
// make array of characters

let menu = new Menu();

menu.start();