import { Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {

    constructor(private bookRepo: BookRepository){}

    get(id: string){
       return this.bookRepo.get(id);
    }

    all(){
        return this.bookRepo.all();
    }
}
