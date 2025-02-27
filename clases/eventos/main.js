//seleccionamos el elemnto 
const btn = document.querySelector('.main-content button');
console.log(btn);

//Definimos que queremos que haga cuando se ejecuta el evento 
const handleButton = () => {
    const imageContainer = document.querySelector('.image-container');
    const image = imageContainer.children[0];
    if (image) {
        image.remove();
    } else {
        const newImage = document.createElement('img');
        newImage.src = 'https://media.istockphoto.com/id/1407633532/es/vector/olvida-el-icono-de-contrase%C3%B1a-protecci%C3%B3n-de-la-cuenta-clave-de-seguridad-advertencia-de.jpg?s=612x612&w=0&k=20&c=HpSjZINjUfxqSqL2ehzlt_KfuPtbmoRtkntntM8hb3w=';
        newImage.alt = 'Imagen de contraseña';
        imageContainer.appendChild(newImage);
    }
};

const suma = (x, y) => x + y;

//agregamos se evento listener (lo que queremos que haga)
btn.addEventListener('click', () => handleButton());

console.log(suma(5, 3));