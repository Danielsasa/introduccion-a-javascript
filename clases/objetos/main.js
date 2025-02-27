/*const persona = {
    nombre: 'Diego',
    edad : 21,
    ciudad: 'CDMX',
    mayorDeEdad: true,
    pasatiempos: ['videojuegos', 'gym', 'guitarra'],
    
    mascotas: {
        nombre: "matequilla",
        edad: 2,
        raza: 'gato'
    },
    saludar: function(){
        console.log("Hola soy " + this.nombre);
    }
}
    console.log(persona.nombre);
    console.log(persona.edad);

    for(let i = 0; i < persona.pasatiempos.length; i++){
        const element = persona.pasatiempos[i];
        console.log(element);
    }

    console.log(persona.mascotas.nombre);

    console.log(persona["nombre"]);

    persona.saludar();

    let {nombre, edad, ciudad} = persona;
    console.log(nombre);*/

   /* const persona = {
        nombre: 'Daniel ',
        edad: 29,
        ciudad: 'CDMX',
        mayorDeEdad: true,
        pasatiempos: ['videojuegos', 'ciclismo', 'nadar'],
        
        mascotas: {
            nombre: "bugy",
            edad: 3,
            raza: "gato"
        }
    }
    
            console.log ( "hola soy " + persona.nombre + " mis pasatiempos  son " + persona.pasatiempos + " y tengo una mascota que se llama " + persona.mascotas.nombre 
            ) ;*/

            const Album = [
                {
                    nombre: "Album 1",
                    canciones: ["cancion 1", "cancion 2", "cancion 3"],
                },
                {
                    nombre: "Album 2",
                    canciones: ["cancion 3"],
                },
                {
                    nombre: "Album 3",
                    canciones: ["cancion 1", "cancion 2"],
                },
            ]
            for (let i = 0; i < Album.length; i++){
                console.log(Album[i].nombre);
                for (let j = 0; j < Album[i].canciones.length; j++){
                    console.log(Album[i].canciones[j]);
            }
        }

        class Persona {
            constructor(nombre, edad, genero)
            {
                this.nombre = nombre;
                this.edad = edad;
                this.genero = genero;
            }

            saludar(){
                console.log( `Hola soy ${this.nombre} y tengo ${this.edad} años`);
            }
            cumplirAnios(){
                this.edad++;
            }
        }

        const persona3 = new Persona("Daniel", 29, "Masculino");
        const perosona4 = new Persona("Diego", 21, "Masculino");

       persona3.saludar();
       perosona4.saludar();

       persona3.cumplirAnios();
       persona3.saludar();

       class Estudiante extends Persona {
           constructor(nombre, edad, genero, carrera){
               super(nombre, edad, genero);
               this.carrera = carrera;
           }
           saludar(){
               console.log(`Hola soy ${this.nombre} y estudio ${this.carrera}`);
           }
       }        

         const estudiante = new Estudiante("Daniel", 29, "Masculino", "Desarrollo de Software");

         console.log(estudiante);

console.log(`*********`);


