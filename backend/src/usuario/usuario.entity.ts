

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'usuarios'})
export class UsuarioEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text' ,nullable: false})
    nombre: string;

    @Column({type: 'text', nullable: false, unique: true})
    correo: string;

    @Column({type:'text', nullable: false})
    password: string;

   


}