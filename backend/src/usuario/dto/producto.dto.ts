import { NotaEntity } from "src/nota/nota.entity";

export class NotaDto{

    id: number;
    nombre?: string;
    correo?: string;
    password?: string;
    notas?: NotaEntity[];
  
}