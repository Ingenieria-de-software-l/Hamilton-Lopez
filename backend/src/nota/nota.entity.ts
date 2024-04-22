import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'notas'})
export class NotaEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text' ,nullable: false})
    titulo: string;

    @Column({type: 'text', nullable: false})
    contenido: string;

    @Column({type:'date', nullable: false})
    fecha: Date;

    @Column({type: 'text', nullable: false})
    categoria: string;

    @Column({type: 'text', nullable: false})
    usuario: string;

    @Column({type: 'boolean', nullable: false})
    activo: boolean;


}