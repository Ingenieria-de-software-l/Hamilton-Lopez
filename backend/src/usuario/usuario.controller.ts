import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './usuario.entity';

@Controller('usuario')
export class UsuarioController {



        constructor(private readonly usuarioService: UsuarioService) {
    
        }
    
        @Get()
        async getAll() {
            return  await this.usuarioService.getAll();
        }
    
        @Get(':id')
        async getOne(@Param('id', ParseIntPipe) id: number): Promise<UsuarioEntity> {
            return await this.usuarioService.findById(id);
        }
    
        @Post()
        async create(@Body () nota: UsuarioEntity) {
            return await this.usuarioService.create(nota);
            
        }
    
        @Put(':id')
        async update(@Param('id', ParseIntPipe) id: number, @Body() nota: UsuarioEntity) {
            return await this.usuarioService.update(id, nota);
        }
    
        @Delete(':id')
        async delete(@Param('id', ParseIntPipe) id: number) {
            return await this.usuarioService.delete(id);
        }
    
    
        

}
