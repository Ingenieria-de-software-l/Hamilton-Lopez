import { UsuarioEntity } from "src/usuario/usuario.entity";

export class NotaDto{

    id: number;
    titulo?: string;
    contenido?: string;
    fecha?: Date;
    categoria?: string;
    usuario?: UsuarioEntity;
    activo?: boolean;
}