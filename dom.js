const userInputs = {
    numChar: "",
    uppercase: false,
    lowercase: false,
    numbers: false, 
    symbols: false
}

const userInputNumChar = document.getElementById('numChar')
userInputNumChar.addEventListener('submit', () => {
    userInputs.userInputNumChar()
    console.log(userInputs)
})


const btn = document.getElementById('btn');
const displayPasswordContainer = document.getElementById('password-container')

$(document).ready(function() {
    $('#toggleButton').click(function() {
        var checkbox = $('#myCheckbox');
        checkbox.prop('checked', !checkbox.prop('checked'));
    });
});


function clearAppendedData () {
    displayPasswordContainer.innerHTML = ' ';
}

btn.addEventListener('click', () => {
    console.log('button clicked')

    const clipboardContainer = document.getElementById('clipboardContainer')
    const clearDataContainer = document.getElementById('clearDataContainer')
    
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

    // check if the clear and reload button already exists
    if (!document.getElementById('clearDataBtn')) {

        const clearDataBtn = document.createElement('button');
        clearDataBtn.id = 'clearDataBtn'
        clearDataBtn.innerText = 'Clear & Reload';
        clearDataContainer.append(clearDataBtn);

        clearDataBtn.addEventListener('click', () => {
            clearScreen()
        });

    } else {
        console.log('Clear data button already exists')
    }
    // disable the generate password button from appending anything after the first click
    clearAppendedData();

    // generate password and append to the screen
    const generatedPassword = secureKeyMaker();
    displayPasswordContainer.append(generatedPassword)

})



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


const clearScreen = () => { return location.reload();}