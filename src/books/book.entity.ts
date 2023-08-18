import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove} from 'typeorm';
import { Media } from 'src/shared/media.entity';

@Entity()
export class Book extends Media {
    
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({
        nullable: true,
    })
    isbn:string;

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