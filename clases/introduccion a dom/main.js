const title = document.getElementById('main-Title');
console.log(title.textContent);
title.textContent = 'Este es un titulo diferente';

const boxes = document.getElementsByClassName('box');
console.log(boxes);
const boxesArray = [...boxes];

console.log(boxesArray);

/*const newDiv = document.createElement('div');
newDiv.className = 'box';
newDiv.textContent = 'Soy un nuevo div';
const container = document.querySelector('.container');
container.appendChild(newDiv);*/
//creado nodos con js

const mynewbox = document.createElement('div');
const pBox = document.createElement('p');
const textBox = document.createTextNode('dib creado con js');
pBox.appendChild(textBox);
mynewbox.appendChild(pBox);
mynewbox.classList.add('box');
const container = document.querySelector('.container');
container.appendChild(mynewbox);

const boxtoBeremoved = document.querySelector('.box');
console.log(boxtoBeremoved);
container.removeChild(boxtoBeremoved);

/*while (container.firstChild) {
    container.removeChild(container.firstChild);
}*/

const sameTitle = document.querySelector('.titles-container h1');
console.log(sameTitle);

const allTitles = document.querySelectorAll('.titles-container h1');
console.log(allTitles);

const allTitlesarray = Array.from(allTitles);
console.log(allTitlesarray);

const querySelectorBoxes = document.querySelectorAll('.container .box');
const querySelectorBoxesArray = Array.from(querySelectorBoxes);
console.log(querySelectorBoxesArray);

const myNewTitle = document.createElement('h1');
const textTitle = document.createTextNode('Soy un nuevo titulo');
myNewTitle.appendChild(textTitle);
const titlescontainer = document.querySelector('.titles-container');
titlescontainer.appendChild(myNewTitle);

const myNewTitle2 = document.createElement('h1');
myNewTitle2.textContent = 'Soy un nuevo titulo 2';
titlescontainer.appendChild(myNewTitle2);

const newImage = document.createElement('img');
newImage.src = 'https://img.freepik.com/foto-gratis/closeup-foto-hermoso-gatito-domestico-jengibre-sentado-sobre-superficie-blanca_181624-35913.jpg';
newImage.alt = 'placeholder';
newImage.width = '15rem';
titlescontainer.appendChild(newImage);
