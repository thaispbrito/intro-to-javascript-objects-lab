const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

/*
Exercise 1
1. Spend some time inspecting the pokemon array by running the command console.dir(pokemon, { maxArrayLength: null }).
2. Use console.log() to log JUST the name of the Pokemon with the number 59 using the index of the Pokemon in the array.

Solve Exercise 1 here:
*/

console.dir(pokemon, { maxArrayLength: null });

console.log(pokemon[58].name);    // Using 58 here because index starts from 0

// Another option would be only using index (commented out below):
// console.log(pokemon[58]['name']); 


/*
Exercise 2
1. Next, run console.log(game).
2. Take a moment to familiarize yourself with the game object being logged.

Solve Exercise 2 here:
*/

console.log(game);


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Med";


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// Selected the Pokémon 4: Charmander
// Add it to the `game.party` array using the the .push() method:
game.party.push(pokemon[3]);    


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

// Selected Pokémons: numbers 12 ('Butterfree'), 64 ('Kadabra'), and 116 ('Horsea').
// Add them to the `game.party` array using the .push() method:
game.party.push(pokemon[11], pokemon[63], pokemon[115]); 


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;
    }
}


/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

game.party.splice(0, 1, pokemon[4]);    // Evolved form: Pokémon 5


/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (let i = 0; i < game.party.length; i++) {
    console.log(game.party[i].name);
}


/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].starter === true) {
        console.log(pokemon[i]);
    }
}


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// Using the special keyword `this` below. Learned about it when going over the Level Up content,
// right after the Data Structures lesson under the Intro to JavaScript Objects module.
game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);    
};

// Passing in Pokémon number 50 (Diglett)
game.catchPokemon(pokemon[49]);


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

game.catchPokemon = function (pokemonObj) {
    this.party.push(pokemonObj);  
    for (let i = 0; i < game.items.length; i++) {
        if (this.items[i].name === "pokeball") {
            this.items[i].quantity --;
        }
    }
};

game.catchPokemon(pokemon[83]);    ///Passing in Pokémon number 84 (Doduo):

console.log(game.items);


/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 6) {
        game.gyms[i].completed = true;
    }
}


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function () {
    const gymTally = {
        completed: 0,
        incomplete: 0
    };
    for (let i = 0; i < this.gyms.length; i++) {
        if (this.gyms[i].completed === true) {
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    }
    console.log(gymTally);
};

game.gymStatus();


/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

game.partyCount = function () {
    return this.party.length;
};

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 8) {
        game.gyms[i].completed = true;
    }
}


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log(game);


/// LEVEL UP!!!


/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

// Learned about the compareFn function (from MDN documentation), which we can pass to sort() to decide how the elements get sorted (optional). 
// It takes two parameters that represent the items being compared, for example: (a, b) => a - b sorts numbers in ascending order. 
// If not provided, the array elements get turned into strings first, and then they are sorted based on the Unicode value of each character.

game.party.sort((a, b) => b.hp - a.hp);    // sorting by their HP property in descending order.


/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];

game.catchPokemon = function (pokemonObj) {
    if (this.party.length < 6) {
        this.party.push(pokemonObj);
    } else {
        this.collection.push(pokemonObj);
        this.collection.sort((a, b) => b.number - a.number);    // Decided to distribute the Pokémons here by their number in descending order
    }

    // Decrement the pokeball
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === "pokeball") {
            this.items[i].quantity--;
        }
    }
};

game.catchPokemon(pokemon[88]);    // Selected Pokémon number 89: 'Muk'

console.log(game.items);


/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/

game.collection = [];

game.catchPokemon = function (pokemonObj) {
    // Check for available pokeball (quantity > 0)
    let hasPokeball = false;

    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === "pokeball" && this.items[i].quantity > 0) {
            this.items[i].quantity--;    // use one pokeball
            hasPokeball = true;
            break;    // stop after using 1 pokeball (learned `break` when studied Python)
        }
    }

    if (!hasPokeball) {
        console.log(`There are not enough pokeballs to catch the Pokémon ${pokemonObj.name}!`);
        return;    // stop executing so that the Pokémon isn't added to the `game.party` or the `game.collection`.
    }

    // In case there's at least one pokeball,
    // add Pokémon to `game.party` if space, else to `game.collection`
    if (this.party.length < 6) {
        this.party.push(pokemonObj);
    } else {
        this.collection.push(pokemonObj);
        // Sort collection by number in descending order
        this.collection.sort((a, b) => b.number - a.number);
    }
};


/*
Exercise 20
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.

The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 

If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 20 here:
*/

game.catchPokemon = function (pokemonName) {
    // Normalize input to lowercase 
    const nameLower = pokemonName.toLowerCase();    // learned about the toLowerCase() from the MDN documentation

    // Look for the Pokémon in the dataset
    let pokemonObj = null;
    for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].name.toLowerCase() === nameLower) {
            pokemonObj = pokemon[i];
            break
        }
    }

    // If no match found, return a message and stop executing
    if (!pokemonObj) {
        return `The Pokémon "${pokemonName}" does not exist in the dataset.`;
    }

    // Check for available pokeball (quantity > 0)
    let hasPokeball = false;
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === "pokeball" && this.items[i].quantity > 0) {
            this.items[i].quantity--; // use one pokeball
            hasPokeball = true;
            break;    // break out of the loop after using one pokeball
        }
    }

    // If there's no pokeball, display the messave below
    if (!hasPokeball) {
        console.log(`There are not enough pokeballs to catch ${pokemonObj.name}!`);
        return;    // stop executing so that the Pokemon isn't added to the `game.party` or the `game.collection`.
    }

    // Add Pokémon to party if space, else to collection
    if (this.party.length < 6) {
        this.party.push(pokemonObj);
        console.log(`${pokemonObj.name} has been added to your party!`);
    } else {
        this.collection.push(pokemonObj);
        this.collection.sort((a, b) => b.number - a.number);
        console.log(`${pokemonObj.name} has been added to your collection!`);
    }
};

// game.catchPokemon('venusaur');


/*
Exercise 21
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:

{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}

Log the object when it's constructed.

Solve Exercise 21 here:
*/

const pokemonByType = {};

// Looping the Pokémon array
for (let i = 0; i < pokemon.length; i++) {
  const currPokemon = pokemon[i];
  const type = currPokemon.type; 

  // Create an empty array, if the type does not exist yet as a property
  if (!pokemonByType[type]) {
    pokemonByType[type] = [];
  }

  // Add the current Pokémon to the correct type array
  pokemonByType[type].push(currPokemon);
}

// Log the final object
console.log(pokemonByType);

