import { UsuarioEntity } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


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

    @ManyToOne(() => UsuarioEntity, usuario => usuario.notas)
    @JoinColumn({name: 'usuario'})
    usuario: UsuarioEntity;

    @Column({type: 'boolean', nullable: false})
    activo: boolean;


}