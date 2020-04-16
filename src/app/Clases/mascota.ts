export class Mascota {

    nombre: string;
    tipo: string;
    imagen: string;
    color: string;

    constructor(nombre, tipo, imagen) {
        this.color = 'color:red';
        this.nombre = nombre;
        this.tipo = tipo;
        this.imagen = imagen;
        if (tipo === 'perro') {
            this.color = 'color:green';
        }
        if (tipo === 'pez') {
            this.color = 'color:blue';
        }
    }

}
