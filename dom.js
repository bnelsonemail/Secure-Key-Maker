// dom.js

const userInputs = {
    numChar: "",
    uppercase: false,
    lowercase: false,
    numbers: false, 
    symbols: false
};

const subData = document.getElementById('subData');
const displayPasswordContainer = document.getElementById('password-container');

// Function to update and return the userInputs object
function getUserInputs() {
    userInputs.numChar = document.getElementById('numChar').value;
    userInputs.uppercase = document.getElementById('uppercase').checked;
    userInputs.lowercase = document.getElementById('lowercase').checked;
    userInputs.numbers = document.getElementById('numbers').checked;
    userInputs.symbols = document.getElementById('symbols').checked;

    return userInputs;
}


subData.addEventListener('click', () => {
    console.log('button clicked');

    // Get the updated user inputs
    const updatedUserInputs = getUserInputs();
    //console.log('updated User Inputs:', updatedUserInputs);

    const generateContainer = document.getElementById('generateContainer')
    const clipboardContainer = document.getElementById('clipboardContainer');
    const clearDataContainer = document.getElementById('clearDataContainer');

    // Check if the generate button already exists
    if (!document.getElementById('generateBtn')) {
        const generateBtn = document.createElement('button');
        generateBtn.id = 'generateBtn';
        generateBtn.innerText = 'Generate Secret Key!!';
        generateContainer.append(generateBtn);

        generateBtn.addEventListener('click', () => {
            getUserInputs()
            console.log('user inputs: ' + userInputs);

            //const generatedPassword = secureKeyMaker();
            //copyToClipboard(generatedPassword);
            //alert('Password Copied to Clipboard!');

            // Check if the clipboard button already exists
            if (!document.getElementById('clipboardBtn')) {
                const clipboardBtn = document.createElement('button');
                clipboardBtn.id = 'clipboardBtn';
                clipboardBtn.innerText = 'Copy to Clipboard';
                clipboardContainer.append(clipboardBtn);

                clipboardBtn.addEventListener('click', () => {
                    console.log('copy clicked');

                    const generatedPassword = secureKeyMaker();
                    copyToClipboard(generatedPassword);
                    alert('Password Copied to Clipboard!');
                });
            } else {
                console.log('Clipboard button already exists');
            }

            // Check if the clear and reload button already exists
            if (!document.getElementById('clearDataBtn')) {
                const clearDataBtn = document.createElement('button');
                clearDataBtn.id = 'clearDataBtn';
                clearDataBtn.innerText = 'Clear & Reload';
                clearDataContainer.append(clearDataBtn);

                clearDataBtn.addEventListener('click', () => {
                    clearScreen();
                });
            } else {
                console.log('Clear data button already exists');
            }
        });
    } else {
        console.log('Generate button already exists');
    }
    
    

    // Disable the generate password button from appending anything after the first click
    clearAppendedData();

    // Generate password and append to the screen
    const generatedPassword = secureKeyMaker();
    displayPasswordContainer.innerText = generatedPassword; // Assuming secureKeyMaker returns a string
    return updatedUserInputs
});

function clearAppendedData() {
    displayPasswordContainer.innerHTML = '';
}

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        // Navigator clipboard api method
        return navigator.clipboard.writeText(text).then(() => {
            console.log('Copied to clipboard');
        }, (err) => {
            console.error('Failed to copy: ', err);
        });
    } else {
        // Fallback method for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // Make the textarea out of viewport
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((resolve, reject) => {
            document.execCommand('copy') ? resolve() : reject();
            textArea.remove();
        });
    }
}

const clearScreen = () => { return location.reload(); };

// Example of using updated user inputs outside the click event
// You can call getUserInputs() to get the latest inputs whenever needed
console.log('Initial userInputs:', getUserInputs());


