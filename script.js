const symbols = ['!','@','#','$','%','&','-'];
const numbers = [1,2,3,4,5,6,7,8,9]

let letters = 'abcdefghijklmnopqrstuvwxyz';
let capLetters = letters.toUpperCase()

const arrLetters = [...letters];
const arrCapLetters = [...capLetters];

const allArrays = [];
const pickedArray = [];


// Combines all of the arrays
const combineAllArrays = () => { return allArrays.push(...symbols, ...numbers, ...arrLetters, ...arrCapLetters)};


// Combines the UpperCase and LowerCase arrays
const combineUpperLower = () => { return allArrays.push(...arrLetters, ...arrCapLetters)};

// Combines the UpperCase and numbers
const combineUpperNum = () => { return allArrays.push(...arrCapLetters, ...numbers)};


//Combines the UpperCase and Symbols
const combineUpperSymbols = () => { return allArrays.push(...arrCapLetters, ...symbols)} ;


// TODO: function randomArray pulls allArrays from the above functions.  If all functions are called, then the randomArray will give bad results.  How to call the correct function based upon user preferences.

function randomArray () {
   for(let i = 0;i < 20;i++){
    let randomIndex = Math.floor(Math.random() * allArrays.length);
    pickedArray.push(allArrays[randomIndex])
    } 
    return pickedArray
}

randomArray()

// convert pickedArray into a string for the password
function secureKeyMaker() {
    const separator = ''; // use '' to concatenate without any separator
    const password = pickedArray.join(separator);  
    return password;  
}

const generatedPassword = secureKeyMaker();
console.log(generatedPassword);











