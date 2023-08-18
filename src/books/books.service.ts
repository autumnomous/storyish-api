import { Injectable, InternalServerErrorException, NotImplementedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Creator } from 'src/creators/creator.entity';
import { BookToCreatorsService } from './booktocreator.service';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private repository: Repository<Book>, private readonly bookToCreatorsService: BookToCreatorsService){}

    async create(attrs:Book, creator: Creator){

        try {
            const book = this.repository.create(attrs);
            const savedBook = await this.repository.save(book);
            await this.bookToCreatorsService.create(savedBook, creator);
            return savedBook;
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException(error);
        }
       
        
    }

    findOne(){

    }

    findAll(){}

    getOrCreate(attrs:Book, creator: Creator){
        throw new NotImplementedException()
    }

}
