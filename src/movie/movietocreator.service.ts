import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "./movie.entity";
import { Creator } from "src/creators/creator.entity";
import { Repository } from "typeorm";
import { MovieToCreator } from "./movietocreator.entity";

@Injectable()
export class MovieToCreatorService{

    constructor(@InjectRepository(MovieToCreator) private repository: Repository<MovieToCreator>){}

    create(movie:Movie, creator: Creator){
        const movieToCreator = new MovieToCreator();
        movieToCreator.movie = movie;
        movieToCreator.creator = creator;
        return this.repository.manager.save(movieToCreator);
    }

    findOne(title:string, creatorFirstName:string, creatorLastName:string){

        return this.repository.manager.findOne(MovieToCreator,
            {relations:{movie:true, creator:true},
            where:{
                movie:{title},
                creator:{firstName:creatorFirstName, lastName:creatorLastName}
            }

        })
    }

}