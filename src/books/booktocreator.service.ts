import { Injectable } from '@nestjs/common';
import { Creator } from 'src/creators/creator.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BookToCreator } from './booktocreator.entity';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookToCreatorsService {

    constructor(@InjectRepository(Book) private repository: Repository<BookToCreator>){}

    create(book:Book , creator: Creator){
        const bookToCreator = new BookToCreator();
        bookToCreator.book = book;
        bookToCreator.creator = creator;

        return this.repository.manager.save(bookToCreator);
    }

    findOne(title:string,creatorFirstName:string, creatorLastName:string){

        return this.repository.manager.findOne(BookToCreator,
            {relations:{book:true, creator:true},
            where:{
                book:{title}, 
                creator:{firstName:creatorFirstName,lastName:creatorLastName}
            }
        })

    }
}
