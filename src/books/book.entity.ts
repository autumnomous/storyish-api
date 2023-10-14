import { Entity, Column, PrimaryGeneratedColumn, OneToMany,AfterInsert, AfterUpdate, AfterRemove} from 'typeorm';
import { Media } from 'src/shared/exclude/media.entity';
import { BookToCreator } from './booktocreator.entity';

@Entity()
export class Book extends Media {
    
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({
        nullable: true,
    })
    isbn:string;

    @OneToMany(() => BookToCreator, (bookToCreator) => bookToCreator.book,{onDelete:"CASCADE", cascade:true})
    creators: BookToCreator

    @AfterInsert()
    logInsert?(){
        console.log("inserted Book with id ", this.id);
    }

    @AfterUpdate()
    logUpdate?(){
        console.log("updated Book with id ", this.id);
    }
    
    @AfterRemove()
    logRemove?(){
        console.log("removed Book with id ", this.id)
    }
}