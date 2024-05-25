import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioService {

    constructor( @InjectRepository(UsuarioEntity) 
    private usuarioRepository: UsuarioRepository) {
      
    }
    async getAll(): Promise<UsuarioEntity[]> {
        const list = await this.usuarioRepository.find();
        if(!list.length){
            throw new  NotFoundException('No hay usuarios');
        }
        return list;
          
        
    }
    async findById(id: number): Promise<UsuarioEntity> {
        const nota = await this.usuarioRepository.findOne({ where: { id } });
        if(!nota){
            throw new NotFoundException('No existe el usuario');
        }
        return nota;
    }
   

    async create(usuario: UsuarioEntity): Promise<any> {
        const newUsuario = await this.usuarioRepository.create(usuario);
        await this.usuarioRepository.save(newUsuario);
        return {message: 'Usuario creado'}
        
    }
    async update(id: number, usuarioActualizado: UsuarioEntity): Promise<any> {
        const usuario = await this.findById(id);
        usuarioActualizado.correo? usuario.correo = usuarioActualizado.correo : usuario.correo = usuario.correo;
        usuarioActualizado.nombre? usuario.nombre = usuarioActualizado.nombre : usuario.nombre = usuario.nombre;
        usuarioActualizado.password? usuario.password = usuarioActualizado.password : usuario.password = usuario.password;
       
        await this.usuarioRepository.save(usuario);
        return {message: 'Usuario actualizado'}

        
    }

    async delete(id: number): Promise<any> {
        const usuario = await this.findById(id);
        await this.usuarioRepository.delete(usuario);
        return {message: 'Usuario eliminado'}
    }
    async findByEmail(correo: string): Promise<UsuarioEntity> {
       
    
        const usuario = await this.usuarioRepository.findOne({ where: { correo } });
        if(!usuario){
            throw new NotFoundException('No existe el usuario');
        }
        return usuario;
      }


}
