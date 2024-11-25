export class Coche {
    constructor(matricula) {
        this.matricula = matricula;
        console.log("Coche creado con matrícula "+ this.matricula);
    }

    mover() {
        console.log("El coche se mueve");
    }
}