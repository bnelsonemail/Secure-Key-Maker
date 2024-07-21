const btn = document.getElementById('btn');
const displayPasswordContainer = document.getElementById('password-container')

btn.addEventListener('click', () => {
    console.log('button clicked')
    displayPasswordContainer.innerHTML = '';
    const generatedPassword = secureKeyMaker();
    displayPasswordContainer.append(generatedPassword)

})
