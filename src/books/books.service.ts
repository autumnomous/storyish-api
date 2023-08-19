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

    async findOne(creatorFirstName:string, creatorLastName:string, title?:string, isbn?:string, id?:string, ){
       try {

        if(title && creatorFirstName && creatorLastName ){
            const bookToCreator = await this.bookToCreatorsService.findOne(title, creatorFirstName, creatorLastName);
            
            if(bookToCreator){
                return this.repository.findOne({where:{id:bookToCreator.book.id}});
            }

            return null
           
        } else if(isbn){
            return this.repository.findOne({where:{isbn}});
        } else if (id){
            return this.repository.findOne({where:{id}});
        }
        

       } catch (error) {
        console.log(error);
        throw new InternalServerErrorException(error);
       }
       
        return null;
    }

    findAll(){}

    async getOrCreate(attrs:Book, creator: Creator){
        const book = await this.findOne(creator.firstName, creator.lastName, attrs.title,attrs.isbn, attrs.id);

        if(book !== null){
            return book;
        }

        return this.create(attrs,creator);

    }

}
