const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.children[0];
const generateBtn = document.querySelector('.generator form button');
const copyIcon = document.getElementById('copyIcon'); // Selecciona el icono de copiar 

const handleChange = () => {
    const inputValue = inputRange.value;
    const lengthCounter = document.querySelector('.range-container h1');
    lengthCounter.textContent = inputValue;
}

const generatePassword = (passwordLength, useUppercase, useLowercase, useNumbers, useSpecial) => {
    let result = '';
    let characters = '';
    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) characters += '0123456789';
    if (useSpecial) characters += '@#$%&*';
    if (characters.length === 0) characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

    for (let i = 0; i < passwordLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const printPassword = (event) => {
    event.preventDefault();
    const inputValue = inputRange.value;
    const useUppercase = document.getElementById('input-password-uppercase').checked;
    const useLowercase = document.getElementById('input-password-lowercase').checked;
    const useNumbers = document.getElementById('input-password-numbers').checked;
    const useSpecial = document.getElementById('input-password-special').checked;
    const password = generatePassword(inputValue, useUppercase, useLowercase, useNumbers, useSpecial);
    const passwordHeading = document.querySelector('.password-container h1');
    passwordHeading.textContent = password;
}

const copyPassword = () => {
    const passwordHeading = document.querySelector('.password-container h1');
    const password = passwordHeading.textContent;
    navigator.clipboard.writeText(password).then(() => {
    });
}

inputRange.addEventListener('change', () => handleChange());
generateBtn.addEventListener('click', (event) => printPassword(event));
copyIcon.addEventListener('click', () => copyPassword()); // Añade el event listener al icono de copiar