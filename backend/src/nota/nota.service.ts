import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotaRepository } from './nota.repository';
import { NotaEntity } from './nota.entity';

@Injectable()
export class NotaService {

    constructor( @InjectRepository(NotaEntity) 
    private notaRepository: NotaRepository) {
      
    }
    async getAll(): Promise<NotaEntity[]> {
        const list = await this.notaRepository.find();
        if(!list.length){
            throw new  NotFoundException('No hay notas');
        }
        return list;
          
        
    }
    async findById(id: number): Promise<NotaEntity> {
        const nota = await this.notaRepository.findOne({ where: { id } });
        if(!nota){
            throw new NotFoundException('No existe la nota');
        }
        return nota;
    }
    async findByIdUser(id: number): Promise<NotaEntity> {
        const nota = await this.notaRepository.findOne({ where: {  id} });
        if(!nota){
            throw new NotFoundException('No existe la nota');
        }
        return nota;
    }

    async create(nota: NotaEntity): Promise<any> {
        const newNota = await this.notaRepository.create(nota);
        await this.notaRepository.save(newNota);
        return {message: 'Nota creada'}
        
    }
    async update(id: number, notaActualizada: NotaEntity): Promise<any> {
        const nota = await this.findById(id);
        notaActualizada.titulo? nota.titulo = notaActualizada.titulo : nota.titulo = nota.titulo;
        notaActualizada.contenido? nota.contenido = notaActualizada.contenido : nota.contenido = nota.contenido;
        notaActualizada.categoria? nota.categoria = notaActualizada.categoria : nota.categoria = nota.categoria;
        notaActualizada.activo? nota.activo = notaActualizada.activo : nota.activo = nota.activo;
        notaActualizada.usuario? nota.usuario = notaActualizada.usuario : nota.usuario = nota.usuario;
        await this.notaRepository.save(nota);
        return {message: 'Nota actualizada'}

        
    }

    async delete(id: number): Promise<any> {
        const nota = await this.findById(id);
        await this.notaRepository.delete(nota);
        return {message: 'Nota eliminada'}
    }
    async findByUsuario(userId: number): Promise<NotaEntity[]> {
        return this.notaRepository.find({ where: { usuario: { id: userId } } });
      }



}
