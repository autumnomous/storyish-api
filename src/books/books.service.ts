import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private repository: Repository<Book>){}

    create(attrs: Partial<Book>){
        const book = this.repository.create(attrs);
        return this.repository.save(book);
    }


}
