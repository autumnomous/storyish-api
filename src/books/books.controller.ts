import { Controller, Get, Body, Post } from '@nestjs/common';
import { GetBookDto } from './dtos/get-book.dto';
import { CreateBookDto } from './dtos/create-book.dto';
import { BooksService } from './books.service';
import { CreatorsService } from '../creators/creators.service';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService, private readonly creatorsService:CreatorsService){}

    @Post('/create')
    async createBook(@Body() body:CreateBookDto){

        const creator = await this.creatorsService.getOrCreate(body.mediaToCreators.creator.firstName, body.mediaToCreators.creator.lastName)
        return this.booksService.getOrCreate(body, creator);
        
    }

    @Get()
    findOne(@Body() body:GetBookDto){
        return this.booksService.findOne(body.creatorFirstName, body.creatorLastName,body.title,body.isbn, body.id)
    }
}
