import { Controller,Post, Body, Get, ParseIntPipe, Param, Delete } from '@nestjs/common';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { GetMovieDto } from './dtos/get-movie.dto';
import { SearchMovieDto } from './dtos/search-movie.dto';
import { MoviesService } from './movies.service';
import { CreatorsService } from 'src/creators/creators.service';


@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService, private readonly creatorsService: CreatorsService){}

    @Post('/create')
    async createMovie(@Body() body:CreateMovieDto){
        const creator = await this.creatorsService.getOrCreate(body.creators.creator.firstName, body.creators.creator.lastName)
        return this.moviesService.getOrCreate(body, creator);
    }

    @Get()
    findOne(@Body() body:GetMovieDto){
        return this.moviesService.findOne(body.creatorFirstName, body.creatorLastName, body.title, body.id)
    }

    @Get("/search/:page")
    find(@Body() body: SearchMovieDto, @Param("page", ParseIntPipe) page:number){
        return this.moviesService.find(body,{firstName:body.creatorFirstName, lastName:body.creatorLastName}, page)
    }

    @Delete("/:id")
    remove(@Param("id") id:string){
        return this.moviesService.remove(id);
    }
}
