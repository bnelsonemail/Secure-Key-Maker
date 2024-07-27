// script.js

// import { getUserInputs } from './dom.js';


console.log('script')

const symbols = ['!','@','#','$','%','&','-'];
const numbers = [1,2,3,4,5,6,7,8,9]

let letters = 'abcdefghijklmnopqrstuvwxyz';
let capLetters = letters.toUpperCase()

const arrLetters = [...letters];
const arrCapLetters = [...capLetters];

const allArrays = [];
const pickedArray = [];


/*  logic to change input string to number
let str = '23'; let num = parseInt(str, 10); // 10 is the radix (base) parameter console.log(num); // Output: 23
*/
 // function to select appropriate function to use for random pass code:

function analyzeUserInputs (userInputs){
    console.log('updated user inputs from script:', userInputs)
    if(userInputs.uppercase){
        allArrays.push(...arrCapLetters)
    }
    if(userInputs.lowercase){
        allArrays.push(...arrLetters)
    }
    if(userInputs.numbers){
        allArrays.push(...numbers)
    }
    if(userInputs.symbols){
        allArrays.push(...symbols)
    }
    console.log(allArrays)
}

function randomArray (userInputs) {
   for(let i = 0;i < parseInt(userInputs.numChar);i++){
    let randomIndex = Math.floor(Math.random() * allArrays.length);
    pickedArray.push(allArrays[randomIndex])
    } 
    return pickedArray
}



// convert pickedArray into a string for the password
function secureKeyMaker(pickedArray) {
    const separator = ''; // use '' to concatenate without any separator
    const password = pickedArray.join(separator);  
    return password;  
}

const generatedPassword = secureKeyMaker(pickedArray);
console.log(generatedPassword);











