const symbols = ['!','@','#','$','%','&','-'];
const numbers = [1,2,3,4,5,6,7,8,9]

let letters = 'abcdefghijklmnopqrstuvwxyz';
let capLetters = letters.toUpperCase()

const arrLetters = [...letters];
const arrCapLetters = [...capLetters];

const allArrays = [];
const pickedArray = [];


function combineArrays () {
    return allArrays.push(...symbols, ...numbers, ...arrLetters, ...arrCapLetters);
}

combineArrays()
//console.log (allArrays[45])



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




