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
console.log("ciclo for");

let i = 0;
while (i < frutas.length) {
    console.log(frutas[i]);
    console.log(cantidadFrutas[frutas[i]]);
    i++;
}
console.log("*************");
console.log("ciclo while");