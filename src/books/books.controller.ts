import { Controller, Get, Body, Post, Delete, Param, ParseIntPipe, ParseArrayPipe } from '@nestjs/common';
import { GetBookDto } from './dtos/get-book.dto';
import { CreateBookDto } from './dtos/create-book.dto';
import { BooksService } from './books.service';
import { CreatorsService } from '../creators/creators.service';
import { SearchBookDto } from './dtos/search-book.dto';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService, private readonly creatorsService:CreatorsService){}

    @Post('/create')
    async createBook(@Body() body:CreateBookDto){
        const creator = await this.creatorsService.getOrCreate(body.creators.creator.firstName, body.creators.creator.lastName)
        return this.booksService.getOrCreate(body, creator);
        
    }

    @Get()
    findOne(@Body() body:GetBookDto){
        return this.booksService.findOne(body.creatorFirstName, body.creatorLastName,body.title,body.isbn, body.id)
    }

    @Get("/search/:page")
    find(@Body() body:SearchBookDto, @Param("page", ParseIntPipe) page:number){
        return this.booksService.find(body,{firstName:body.creatorFirstName, lastName:body.creatorLastName}, page)
    }

    @Delete('/:id')
    remove(@Param("id") id: string){
        return this.booksService.remove(id);
    }
}
