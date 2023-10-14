import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Creator } from './creator.entity';
import { Repository } from 'typeorm';
import { Name } from '../shared/name.entity';

@Injectable()
export class CreatorsService {

    constructor(@InjectRepository(Creator) private repository: Repository<Creator>){}
    
    create(firstName:string, lastName:string){
        const creator = this.repository.create({"firstName": firstName, "lastName":lastName});
        return this.repository.save(creator);
    }

    async findOne(firstName?:string, lastName?:string, id?:string){
        let searchCriteria = {}

        if(firstName !== undefined){
            searchCriteria = {firstName};
        }

        if(lastName !== undefined){
            searchCriteria = {...searchCriteria, lastName}
        }

        if(id !== undefined){
            searchCriteria = {...searchCriteria,id}
        }
        return await this.repository.findOne({where:[searchCriteria]})
    }

    findAll(){

    }

    async getOrCreate(firstName?:string, lastName?:string, id?:string){

        const creator = await this.findOne(firstName,lastName,id);

        if(creator){
            return creator;
        }

        return this.create(firstName,lastName);
    }
}
