import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

    @Get()
    getAllBooks(){
        return this.bookService.all(); 
    }

    @Get("/:id")
    async getBook(@Param('id') id: string){
        const book = await this.bookService.get(id);

        if(!book){
            throw new NotFoundException("book not found");
        }

        return book;

    }

   
}
