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
}