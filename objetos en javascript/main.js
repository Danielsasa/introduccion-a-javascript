const libro = {
    titulo: "Los Juegos del Hambre",
    autor: "Suzanne Collins",
    añodePublicacion: 2008,
    genero: "Ciencia Ficción",
    estado: "Disponible",
    capitulos: 27,
    agregarCapitulo: ["Capítulo 1", "Capítulo 2", "Capítulo 3"],
    imprimirInfo: function() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año de Publicación: ${this.añodePublicacion}, Género: ${this.genero}, Estado: ${this.estado}, Cantidad de Capítulos: ${this.capitulos}`);
    },
    agregarCapitulos: function(agregarCapitulo) {
        this.agregarCapitulo.push(agregarCapitulo);
    },
    eliminarCapitulos: function(agregarCapitulo) {
        this.agregarCapitulo.pop();
    }
};

libro.imprimirInfo();
libro.agregarCapitulos("Capítulo 4");
console.log(libro.agregarCapitulo);
libro.agregarCapitulos("Capítulo 5");
console.log(libro.agregarCapitulo);
libro.eliminarCapitulos();
console.log(libro.agregarCapitulo);
libro.eliminarCapitulos();
console.log(libro.agregarCapitulo);
libro.eliminarCapitulos();
console.log(libro.agregarCapitulo);