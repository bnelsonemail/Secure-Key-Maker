const btn = document.getElementById('btn');
const displayPasswordContainer = document.getElementById('password-container')

function clearAppendedData () {
    displayPasswordContainer.innerHTML = ' ';
}

btn.addEventListener('click', () => {
    console.log('button clicked')
    clearAppendedData();
    const generatedPassword = secureKeyMaker();
    displayPasswordContainer.append(generatedPassword)

})
