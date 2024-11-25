export class Tablas {
    constructor() {
        console.log("Tablas de multiplicar creado.");
    }

    tabla(numero) {
        for (let i=0;i<11;i++) {
            console.log(numero+" X "+i+" = "+(numero*i));
        }
    }
}