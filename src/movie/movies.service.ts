import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, Raw } from 'typeorm';
import { Movie } from './movie.entity';
import { Creator } from 'src/creators/creator.entity';
import { MovieToCreatorService } from './movietocreator.service';

@Injectable()
export class MoviesService {

    constructor(@InjectRepository(Movie) private repository: Repository<Movie>, private readonly movieToCreatorService: MovieToCreatorService){}

    async create(attrs:Movie, creator: Creator){
        try{
            const movie = this.repository.create(attrs);
            const savedMovie = await this.repository.save(movie);
            await this.movieToCreatorService.create(savedMovie, creator);
            return savedMovie;
        } catch (error){
            console.log(error);
            throw new InternalServerErrorException(error);
        }
    }

    async findOne(creatorFirstName:string, creatorLastName:string, title?:string, id?:string){

        try{
            if(title && creatorFirstName && creatorLastName){
                const movieToCreator = await this.movieToCreatorService.findOne(title, creatorFirstName, creatorLastName);

                if(movieToCreator){
                    return this.repository.findOne({where:{id:movieToCreator.movie.id}})
                }

                return null;
            } else if (id){
                return this.repository.findOne({where:{id}});
            }
        } catch (error){
            console.log(error);
            throw new InternalServerErrorException(error);
        }

        return null;
    }

    find(attrs:Partial<Movie>, creator:Partial<Creator>, page:number=0, limit:number=10){

        return this.repository.manager.find(Movie,{skip:page, take:limit, where:[
            {title:Like(attrs.title)},
            {alternateTitles:Like(attrs.title)},
            {alternateTitles:Raw((alias)=> `${alias} IN (alternateTitles)`, {alternateTitles: attrs.alternateTitles})},
            {releaseDate:attrs.releaseDate},
            {tags:Raw((alias) => `${alias} IN (tags)`, {tags:attrs.tags})},
            {synopsis:Like(attrs.synopsis)},
            {creators:{creator:{firstName:creator.firstName}}},
            {creators:{creator:{lastName:creator.lastName}}},
            {creators:{creator:{firstName:creator.firstName,lastName:creator.lastName }}},
            {id:attrs.id}

        ]})
    }

    async getOrCreate(attrs:Movie, creator:Creator){

        const movie = await this.findOne(creator.firstName, creator.lastName, attrs.title, attrs.id)

        if( movie !== null){
            return movie;
        }

        return this.create(attrs, creator);
    }

    async remove(id:string){
        const movie = await this.findOne(null, null, null, id);
        
        if(!movie){
            throw new NotFoundException("Movie not found");
        }

        return this.repository.remove(movie);
    }
}
