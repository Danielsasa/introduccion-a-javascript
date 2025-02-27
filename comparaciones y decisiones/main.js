function evaluarNota(nota) {
    if (nota >= 90) {
        console.log("Excelente");
    } else if (nota >= 75) {
        console.log("Bien");
    } else if (nota >= 60) {
        console.log("Suficiente");
    } else {
        console.log("No aprueba");
    }
}

evaluarNota(45);
evaluarNota(60);
evaluarNota(75);
evaluarNota(0);
evaluarNota(100);