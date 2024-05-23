export class Nota {
    id?: number;
    titulo?: string;
    contenido?: string;
    fecha?: Date;
    estado?: boolean;
    usuario?: number;

    constructor( titulo: string, contenido: string, fecha: Date, estado: boolean, usuario: number) {
       
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha = fecha;
        this.estado = estado;
        this.usuario = usuario;
    }

}
