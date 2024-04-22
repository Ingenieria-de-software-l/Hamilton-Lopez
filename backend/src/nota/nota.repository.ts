import { EntityRepository, Repository } from "typeorm";
import { NotaEntity } from "./nota.entity";

@EntityRepository(NotaEntity)
export class NotaRepository extends Repository<NotaEntity> {
   
}