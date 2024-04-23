export class Nota {
    id?: number;
    titulo?: string;
    contenido?: string;
    fecha?: Date;
    estado?: boolean;
    usuarioId?: number;

    constructor(id: number, titulo: string, contenido: string, fecha: Date, estado: boolean, usuarioId: number) {
        this.id = id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.fecha = fecha;
        this.estado = estado;
        this.usuarioId = usuarioId;
    }

}
