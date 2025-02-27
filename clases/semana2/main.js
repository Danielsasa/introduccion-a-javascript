/*let mensaje = prompt("Ingrese un mensaje");

while (mensaje !== "salir") {
  console.log(mensaje);
  mensaje = prompt("Ingrese un mensaje");
}*/

/*for (let i = 0; i < 10; i+=2) {
  console.log(i);
} 

console.log("Fin del ciclo");

for (let i = 10; i > 0; i--) {
  console.log(i);
}*/

/*let vidas = 3;
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 10"));

while (numeroUsuario !== numeroAleatorio && vidas > 0) {
    vidas--;
    console.log("Te quedan " + vidas + " vidas");
    numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 10"));}

    if (vidas > 0) {
      console.log("Ganaste");
    } else {
        console.log("el número era " +  numeroAleatorio);
    }*/

        /*let nombre = ["Juan", "Pedro", "Pablo", "Luis", "Ana"];

        let numero = [1, 2, 3, 4, 5];
        

        for (let i = 0; i < nombre.length; i++) {
            console.log(nombre[i]);
            console.log(numero[i]);
        }
        
        console.log("*************");

        for (let i= nombre.length - 1; i >= 0; i--) {
            console.log(nombre[i]);
            console.log(numero[i]);
        }*/
/*let numero = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numero.length; i++) {
  suma += numero[i];
}

console.log("La suma de los números es: " + suma);*/
        
const frutas = ["manzana", "pera", "uva", "sandía", "melon", "kiwi", "mango", "fresa", "plátano", "naranja"];

const cantidadFrutas = {
    manzana: 5,
    pera: 4,
    uva: 2,
    sandía: 3,
    melon: 1,
    kiwi: 7,
    mango: 6,
    fresa: 5,
    plátano: 14,
    naranja: 10
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    console.log(cantidadFrutas[frutas[i]]);
}

console.log("*************");

let i = 0;
while (i < frutas.length) {
    console.log(frutas[i]);
    console.log(cantidadFrutas[frutas[i]]);
    i++;
}
console.log("*************");

for (let i = 0; i < 3; i++) { console.log("Hola"); }