import { Controller, Get, Body, Post } from '@nestjs/common';
import { GetBookDto } from './dtos/get-book.dto';
import { CreateBookDto } from './dtos/create-book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService){}

    @Post('/create')
    createBook(@Body() body:CreateBookDto){
        return this.booksService.create(body);
        
    }
}
