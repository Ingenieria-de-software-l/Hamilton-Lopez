export class Usuario {
    id?: number
    nombre: string
    correo: string
    password: string
    tipo: string
    constructor( nombre: string, correo: string, password: string, tipo: string) {
     
        this.nombre = nombre;
        this.correo = correo;
        this.password = password;
        this.tipo = tipo;
    }
}
