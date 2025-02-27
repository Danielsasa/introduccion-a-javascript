const librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log(librosLeidos);
}

agregarLibro('Los Juegos del Hambre');
agregarLibro('Harry Potter');
agregarLibro('El Señor de los Anillos');
agregarLibro('Cancion de Hielo y Fuego');
mostrarLibrosLeidos();