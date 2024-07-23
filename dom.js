const btn = document.getElementById('btn');
const displayPasswordContainer = document.getElementById('password-container')

function clearAppendedData () {
    displayPasswordContainer.innerHTML = ' ';
}

btn.addEventListener('click', () => {
    console.log('button clicked')

    const clipboardContainer = document.getElementById('clipboardContainer')
    
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

    clearAppendedData();
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