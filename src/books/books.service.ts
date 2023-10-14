import { Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { Repository, Like, Raw} from 'typeorm';
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

    find(attrs:Partial<Book>,creator:Partial<Creator>, page:number=0, limit:number=10){

        return this.repository.manager.find(Book,{skip:page, take:limit,where:[
            {title:Like(attrs.title)},
            {alternateTitles:Like(attrs.title)},
            {alternateTitles:Raw((alias) => `${alias} IN (alternateTitles)`,{alternateTitles:attrs.alternateTitles})},
            {isbn:attrs.isbn},
            {releaseDate:attrs.releaseDate},
            {tags:Raw((alias) => `${alias} IN (tags)`,{tags:attrs.tags})},
            {synopsis:Like(attrs.synopsis)},
            {creators:{creator:{firstName:creator.firstName}}},
            {creators:{creator:{lastName:creator.lastName}}},
            {creators:{creator:{firstName:creator.firstName, lastName:creator.lastName}}},
            {id:attrs.id}

        ]})
    }

    async getOrCreate(attrs:Book, creator: Creator){
        const book = await this.findOne(creator.firstName, creator.lastName, attrs.title,attrs.isbn, attrs.id);

        if(book !== null){
            return book;
        }

        return this.create(attrs,creator);

    }

    async remove(id: string){
        const book = await this.findOne(null, null, null, null,id)

        if(!book){
            throw new NotFoundException("Book not found")
        }

        return this.repository.remove(book);
    }

}
