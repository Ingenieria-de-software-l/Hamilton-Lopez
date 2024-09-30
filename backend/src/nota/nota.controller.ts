import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { NotaService } from './nota.service';
import { NotaEntity } from './nota.entity';

@Controller('nota')
export class NotaController {

    constructor(private readonly notaService: NotaService) {

    }

    @Get()
    async getAll() {
        return  await this.notaService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<NotaEntity> {
        return await this.notaService.findById(id);
    }

    @Post()
    async create(@Body () nota: NotaEntity) {
        return await this.notaService.create(nota);
        
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() nota: NotaEntity) {
        return await this.notaService.update(id, nota);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.notaService.delete(id);
    }


    



    

}
