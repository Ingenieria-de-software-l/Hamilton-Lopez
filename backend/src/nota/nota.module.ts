import { Module } from '@nestjs/common';
import { NotaService } from './nota.service';
import { NotaController } from './nota.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotaEntity } from './nota.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotaEntity])],
  providers: [NotaService],
  controllers: [NotaController]
})
export class NotaModule {}
