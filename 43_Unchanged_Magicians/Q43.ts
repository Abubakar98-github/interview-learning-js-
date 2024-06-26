/*43. Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of
magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call 
show_magicians() with each array to show that you have one
array of the original names and one array with the Great
added to each magician’s name.*/


// Step 1: Define the type for the magician names array
type MagicianArray = string[];

// Step 2: Create the showMagicians function
function showMagicians(magicians: MagicianArray): void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Step 3: Create the makeGreat function
function makeGreat(magicians: MagicianArray): MagicianArray {
  return magicians.map((magician) => `The Great ${magician}`);
}

// Step 4: Create an array of magician names
const originalMagicianNames: MagicianArray = ["David Copperfield", "Ricky Jay", "Penn Jillette", "Criss Angel"];

// Step 5: Make a copy of the array
const copiedMagicianNames: MagicianArray = [...originalMagicianNames];

// Step 6: Call makeGreat with the copied array
const greatMagicians: MagicianArray = makeGreat(copiedMagicianNames);

// Step 7: Call showMagicians to show the original names
console.log("Original Magicians:");
showMagicians(originalMagicianNames);

// Step 8: Call showMagicians to show the array with "the Great" added
console.log("\nMagicians with 'The Great':");
showMagicians(greatMagicians);