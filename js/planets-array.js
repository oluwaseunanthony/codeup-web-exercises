(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    let earthIndex = planets.indexOf("Earth");
    console.log("The index of 'Earth' is: " + earthIndex);

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();

// use the unshift method to add "The Sun" to the beginning of the planets array.
//  use the push method to add "Pluto" to the end of the planets array.
//  use the shift method to remove "The Sun" from the beginning of the array.
//  use the pop method to remove "Pluto" from the end of the array.
//  use the indexOf method to find the index of "Earth" in the array and log it.
//  use the reverse method to reverse the order of the planets array.
//  use the sort method to sort the planets array alphabetically.